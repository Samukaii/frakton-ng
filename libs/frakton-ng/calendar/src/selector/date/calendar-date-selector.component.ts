import { Component, computed, effect, input, model, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToClassPipe } from 'frakton-ng/internal/pipes';
import { FktCalendarDateConfig, FktCalendarDateConfigFn } from '../../fkt-calendar.types';

function compareDates(a: Date, b: Date): 'equal' | 'before' | 'after' {
  if (a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()) return 'equal';
  if (a < b) return 'before';
  return 'after';
}

@Component({
  selector: 'fkt-calendar-date-selector',
  imports: [DatePipe, ToClassPipe],
  templateUrl: './calendar-date-selector.component.html',
  styleUrl: './calendar-date-selector.component.scss',
  standalone: true,
})
export class CalendarDateSelectorComponent {
  headerLess = input(false);
  currentDate = model(new Date());
  configFn = input<FktCalendarDateConfigFn>(() => ({}));
  afterSelect = input<() => void>(() => {
  });
  yearClick = input<() => void>(() => {
  });
  monthClick = input<() => void>(() => {
  });

  focusedIndex = signal<number>(-1);

  monthPeriod = computed(() => {
    const currentDate = this.currentDate();

    const startDate = new Date(currentDate);
    startDate.setHours(0, 0, 0, 0);
    startDate.setDate(1);

    const endDate = new Date(currentDate);
    endDate.setHours(23, 59, 59, 59);
    endDate.setMonth(currentDate.getMonth() + 1, 0);

    return {startDate, endDate, daysCount: endDate.getDate()};
  });

  weekdays = computed(() => {
    const weekDays: string[] = [];

    const base = new Date();
    base.setDate(base.getDate() - base.getDay());
    for (let weekday = 0; weekday < 7; weekday++) {
      const date = new Date(base);
      date.setDate(base.getDate() + weekday);
      weekDays.push(date.toISOString());
    }
    return weekDays;
  });

  days = computed(() => {
    const {daysCount} = this.monthPeriod();
    const today = new Date();
    const list: FktCalendarDateConfig[] = [];
    const currentDate = this.currentDate();

    for (let day = 1; day <= daysCount; day++) {
      const date = new Date(currentDate);
      date.setDate(day);
      const isCurrentDate = compareDates(date, currentDate) === 'equal';
      const isToday = compareDates(date, today) === 'equal';

      if (day === 1) {
        const weekdays = date.getDay();
        for (let weekDay = 1; weekDay <= weekdays; weekDay++) {
          const prevMonthDate = new Date(date);
          prevMonthDate.setDate(prevMonthDate.getDate() - weekDay);
          list.unshift({
            date: prevMonthDate.toISOString(),
            classes: ['calendar__date--out-of-range'],
            isCurrentDate: false,
            isToday: false,
          });
        }
      }

      const {classes = [], onClick} = this.configFn()(date);

      list.push({
        date: date.toISOString(),
        onClick,
        classes,
        isCurrentDate,
        isToday,
      });

      if (day === daysCount) {
        const weekdays = 6 - date.getDay();
        for (let weekDay = 1; weekDay <= weekdays; weekDay++) {
          const nextMonthDate = new Date(date);
          nextMonthDate.setDate(nextMonthDate.getDate() + weekDay);
          list.push({
            date: nextMonthDate.toISOString(),
            classes: ['calendar__date--out-of-range'],
            isCurrentDate: false,
            isToday: false,
          });
        }
      }
    }
    return list;
  });

  constructor() {
    effect(() => {
      const days = this.days();
      const selected = days.findIndex(d => d.isCurrentDate);
      this.focusedIndex.set(selected > -1 ? selected : 0);
    });
  }

  onKeydown(event: KeyboardEvent, day: FktCalendarDateConfig, idx: number) {
    const days = this.days();
    let next = this.focusedIndex();

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        next = Math.min(days.length - 1, next + 1);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        next = Math.max(0, next - 1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        next = Math.min(days.length - 1, next + 7);
        break;
      case 'ArrowUp':
        event.preventDefault();
        next = Math.max(0, next - 7);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (day.onClick) day.onClick();
        break;
      default:
        return;
    }
    if (next !== this.focusedIndex()) {
      this.focusedIndex.set(next);
      event.preventDefault();
      setTimeout(() => {
        const el = document.querySelector(`[data-calendar-idx="${next}"]`) as HTMLElement;
        el?.focus();
      });
    }
  }
}

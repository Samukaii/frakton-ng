import { Component, input, model, output, signal, viewChildren } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
  selector: 'fkt-calendar-month-selector',
  imports: [DatePipe, FktButtonComponent],
  templateUrl: './calendar-month-selector.component.html',
  styleUrl: './calendar-month-selector.component.scss',
})
export class CalendarMonthSelectorComponent {
  headerLess = input(false);
  currentDate = model(new Date());
  back = output();
  yearClick = output();

  private colCount = 3;

  protected months = Array.from({length: 12}, (_, index) => {
    const date = new Date();
    date.setMonth(index, 1);
    date.setFullYear(this.currentDate().getFullYear());
    return date;
  });

  focusedIndex = signal(0);

  protected monthButtons = viewChildren(FktButtonComponent);

  protected get selectedIndex() {
    return this.currentDate().getMonth();
  }

  protected selectMonth(index: number) {
    this.currentDate.update(date => {
      const newDate = new Date(date);
      newDate.setMonth(index);
      return newDate;
    });
    this.back.emit();
  }

  protected onGridKeydown(event: KeyboardEvent) {
    const total = this.months.length;
    let nextIndex = this.focusedIndex();

    switch (event.key) {
      case 'ArrowLeft':
        nextIndex = (this.focusedIndex() % this.colCount === 0)
          ? Math.min(total - 1, this.focusedIndex() + this.colCount - 1)
          : this.focusedIndex() - 1;
        break;
      case 'ArrowRight':
        nextIndex = (this.focusedIndex() % this.colCount === this.colCount - 1 || this.focusedIndex() === total - 1)
          ? this.focusedIndex() - (this.colCount - 1) >= 0 ? this.focusedIndex() - (this.colCount - 1) : 0
          : this.focusedIndex() + 1;
        if (nextIndex >= total) nextIndex = this.focusedIndex() - (this.colCount - 1);
        break;
      case 'ArrowUp':
        nextIndex = this.focusedIndex() - this.colCount;
        if (nextIndex < 0) {
          const lastRow = Math.floor((total - 1) / this.colCount) * this.colCount;
          const col = this.focusedIndex() % this.colCount;
          nextIndex = lastRow + col;
          if (nextIndex >= total) nextIndex = total - 1;
        }
        break;
      case 'ArrowDown':
        nextIndex = this.focusedIndex() + this.colCount;
        if (nextIndex >= total) {
          nextIndex = this.focusedIndex() % this.colCount;
        }
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = total - 1;
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        this.selectMonth(this.focusedIndex());
        event.preventDefault();
        return;
      default:
        return;
    }

    this.focusedIndex.set(nextIndex);
    setTimeout(() => {
      const buttons = this.monthButtons();
      buttons[nextIndex]?.focus();
    }, 0);
  }
}

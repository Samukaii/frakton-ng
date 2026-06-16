import { RandomSchema } from '@/models/random-schema';
import {
    generateSchema,
    isSchema,
    isSchemaType,
} from '@/utils/random-schema-generators';
import { ArraysHelper } from './arrays-helper';
import { Generic } from '@/models/generic';
import { randomFirstNames, randomLastNames } from '@/utils/random-first-names';
import { snakeCaseToHumanReadable } from './snake-case-to-human-readable';
import { FktAutocompleteOption } from 'frakton-ng/autocomplete-old';
import { randomProductNames } from '@/utils/random-product-names';

export class RandomGenerator {
    static schema<T = Generic>(schemaGenerator: RandomSchema<T>, position?: number) {
        const newObject: Generic = {};
        const entries = Object.entries(schemaGenerator);

        entries.forEach(([key, value]) => {
            if (typeof value === 'function') {
                newObject[key] = value(newObject, position);
                return;
            }

            if (isSchemaType(value)) {
                newObject[key] = generateSchema(value, RandomGenerator);
                return;
            }

            if (isSchema(value)) newObject[key] = this.schema(value);
        });

        return newObject as T;
    }

    static personFullName() {
        return `${this.personFirstName()} ${this.personLastName()}`;
    }

    static personFirstName() {
        return this.anyOfThese(...randomFirstNames);
    }

    static personLastName() {
        return this.anyOfThese(...randomLastNames);
    }

    static productName() {
        return this.anyOfThese(...randomProductNames);
    }

    static email() {
        const emails = randomFirstNames.map((personName) =>
            this.emailFor(personName)
        );

        return this.anyOfThese(...emails);
    }

    static emailFor(personName: string) {
        return `${personName.toLowerCase().replace(/ /, '')}@email.com`;
    }

    static array<T>(
        schema: RandomSchema<T> | ((position: number) => any),
        repeat: number
    ) {
        return ArraysHelper.createWithNumbers(repeat).map((position) => {
            if (typeof schema === 'function') return schema(position);
            return this.schema<T>(schema, position);
        }) as T[];
    }

    static date(minDate?: Date | string, maxDate: Date | string = new Date()) {
        maxDate = new Date(maxDate);
        const timestamp = Math.floor(Math.random() * maxDate.getTime());
        return new Date(timestamp);
    }

    static randomDate(minDate?: Date | string, maxDate?: Date | string) {
        const defaultMin = new Date(1970, 1, 1);
        const defaultMax = new Date(3000, 12, 31);

        minDate = new Date(minDate ?? defaultMin);
        maxDate = new Date(maxDate ?? defaultMax);

        return new Date(
            minDate.getTime() +
                Math.random() * (maxDate.getTime() - minDate.getTime())
        );
    }

    static integer(min = -99999, max = 99999) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    static templateText(template: string) {
        let newText = '';

        template.split('').forEach((char) => {
            if (char === '0') {
                newText += this.integer(0, 9);
                return;
            }

            newText += char;
        });

        return newText;
    }

    static float(min = -99999, max = 99999) {
        return Math.random() * (max - min) + min;
    }

    static enumValues<T extends Generic>(enumeration: T) {
        return Object.keys(enumeration)
            .map((key) => +key)
            .filter((key) => !isNaN(key)) as unknown as T[keyof T][];
    }

    static statusValues<T extends Generic>(enumeration: T) {
        return Object.entries(enumeration)
            .filter(([key]) => !isNaN(+key))
            .map(([key, value]) => ({
                value: +key,
                label: snakeCaseToHumanReadable(value),
            })) as FktAutocompleteOption[];
    }

    static status<T extends Generic>(enumeration: T) {
        const statusValues = this.statusValues(enumeration);

        const randomIndex = this.integer(0, statusValues.length);
        return statusValues[randomIndex];
    }

    static allStatus<T extends Generic>(enumeration: T) {
        const statusValues = this.statusValues(enumeration);

        const allStatus: Generic[] = [];

        for (let index = 0; index < statusValues.length; index++) {
            allStatus.push(statusValues[index]);
        }

        return allStatus;
    }

    static enumeration<T extends Generic>(enumeration: T) {
        const enumValues = this.enumValues(enumeration);

        const randomIndex = this.integer(0, enumValues.length);
        return enumValues[randomIndex];
    }

    static trueFalse() {
        const result = this.integer(0, 2);

        return result === 1;
    }

    static word(length: number) {
        const characters = 'abcdefghijklmnopqrstuvwxyz';

        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }

        return result;
    }

    static phrase(wordsCount: number) {
        const words = ArraysHelper.createWithNumbers(wordsCount).map(() =>
            this.word(this.integer(7, 10))
        );

        return words.join(' ');
    }

    static paragraphs(paragraphsCount: number) {
        const paragraphs = ArraysHelper.createWithNumbers(paragraphsCount).map(
            () =>
                ArraysHelper.createWithNumbers(this.integer(8, 15))
                    .map(() => this.phrase(this.integer(8, 16)))
                    .join(' ')
        );

        return paragraphs.join('\n\n');
    }

    static randomHour(minHours = '00:00', maxHours = '23:59') {
        const [minHour, minMinute] = minHours.split(':');
        const [maxHour, maxMinute] = maxHours.split(':');

        const hours: number = this.integer(+minHour, +maxHour);
        let minutes = this.integer(0, 60);

        if (hours === +minHour) {
            minutes = this.integer(+minMinute, 60);
        } else if (hours === +maxHours) {
            minutes = this.integer(0, +maxMinute);
        }

        const hoursFormatted = hours < 10 ? `0${hours}` : hours;
        const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;

        return `${hoursFormatted}:${minutesFormatted}`;
    }

    static hourPeriod(minHour = '00:00', maxHour = '23:59') {
        const start = this.randomHour(minHour, maxHour);
        const end = this.randomHour(start, maxHour);

        return {
            start,
            end,
        };
    }

    static period(
        minDate?: string | Date,
        maxDate?: string | Date,
        periodMaxLength = 7
    ) {
        const firstDate = this.randomDate(minDate, maxDate);
        const secondDate = new Date(firstDate);

        secondDate.setDate(
            secondDate.getDate() + this.integer(1, periodMaxLength)
        );

        firstDate.setHours(0, 0, 0, 0);
        secondDate.setHours(23, 59, 0, 0);

        const [startDate, finalDate] = [firstDate, secondDate].sort(
            (a, b) => a.getTime() - b.getTime()
        );

        const hour = this.hourPeriod();

        return {
            startDate,
            finalDate,
            startHour: hour.start,
            finalHour: hour.end,
        };
    }

    static anyOfThese<T extends any[]>(...possibilities: T) {
        const index = this.integer(0, possibilities.length);

        return possibilities[index] as T[number];
    }

    static allEnumsButThese<T extends Generic>(
        enumeration: T,
        excludedEnums: T[keyof T][]
    ) {
        const all = this.enumValues(enumeration);
        const allButExcluded = all.filter(
            (item) => !excludedEnums.includes(item)
        );

        return this.anyOfThese(...allButExcluded);
    }
}

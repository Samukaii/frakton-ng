import { Generic } from '@/models/generic';

export type Identifiable<T=Generic> = T & { id: number };

export class ArraysHelper {
    /**
     * Remove repeated items.
     *
     * @param array
     * @param identifier
     * If it is passed as an argument, the strategy to differentiate the items will be from it
     */
    static filterOnlyOne<T>(array: T[], identifier?: keyof T) {
        if (!identifier) return array.filter((v, i, l) => l.indexOf(v) === i);

        const newArray: T[] = [];

        array.map(item => {
            const hasItem = newArray.find(itemToFind => itemToFind[identifier] === item[identifier]);

            if (!hasItem) newArray.push(item);
        });

        return newArray;
    }

    static getDiffBetween<T extends { id: number }>(oldItems: T[], newItems: T[]){
        return newItems.filter(newItem =>
            !oldItems.find(oldItem => oldItem.id === newItem.id)
        );
    }

    static createWithNumbers(max: number, start = 0) {
        return new Array(max).fill(null).map((value, index) => index + start);
    }

    /***
     * Access an array index and if the index is negative, returns the last item in the array
     *
     * @example
     * const array = ["A", "B", "C"];
     *
     * ArraysHelper.at(array, 1); // "B"
     * ArraysHelper.at(array, 0); // "A"
     * ArraysHelper.at(array, -1); // "C"
     * ArraysHelper.at(array, 3); // undefined
     * ArraysHelper.at(array, 3, true); // "A"
     *
     * @param array
     * @param index
     * @param loop
     */
    static at<T>(array: T[], index: number, loop = false) {
        if (loop) index = index % array.length;

        if (index < 0) index = array.length + index;

        return array[index];
    }

    /**
     * Receives an array and returns a slice of it.
     * If the array size is smaller than the requested range, the array is repeated.
     */
    static sliceAndLoop<T>(array: T[], start: number, end: number) {
        if (!array.length) return [];

        const newArray = [];

        for (let i = start; i < end; i++) {
            newArray.push(this.at(array, i, true));
        }

        return newArray;
    }

    static addIdentifier<T extends Generic>(array: T[]): Identifiable<T>[] {
        return array.map((item, id) => {
            if ('id' in item) return item;

            return {
                ...item,
                id
            };
        }) as Identifiable<T>[];
    }

    /**
     * Merges two arrays and overwrites the first.
     * The strategy to differentiate arrays is through a unique identifier
     */
    static updateArray<T extends Generic>(
        first: T[],
        second: T[],
        identifier: keyof T,
        options?: {
            appendType?: "start" | "end";
            mergeItems?: boolean;
        }) {
        const all = [...first];
        const toAdd: T[] = [];

        const {appendType = "end", mergeItems = false} = options ?? {};

        const findIndex = (item: T) => all.findIndex(itemToFind => itemToFind[identifier] === item[identifier]);

        const updateItem = (index: number, item: T) => {
            const original = all[index];
            const toUpdate = mergeItems ? {...original, ...item} : {...item};

            all.splice(index, 1, toUpdate);
        };

        second.forEach(item => {
            const index = findIndex(item);
            if (index !== -1) {
                updateItem(index, item);
                return;
            }
            toAdd.push(item);
        });


        if (appendType === "end") {
            all.push(...toAdd);
        } else {
            all.unshift(...toAdd);
        }

        return all;
    }

    /**
     * Group items based on the string that is returned to the keyGetter parameter
     */
    static groupBy<T = any>(list: T[], keyGetter: (item: T) => string): { name: string; list: T[] }[] {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return Array.from(map.entries()).map(([key, value]) => ({
            name: key,
            list: value
        }));
    }
}

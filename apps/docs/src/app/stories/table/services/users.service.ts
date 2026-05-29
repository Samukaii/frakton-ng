import { Injectable } from '@angular/core';
import { FktTableSortEvent } from 'frakton-ng/table';

const wait = (time: 300) =>
    new Promise<void>((resolve) => {
        setTimeout(resolve, time);
    });

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    age: number;
    joinedAt: string;
}

export interface UserQueryParams {
    page?: number;
    pageSize?: number;
    sort?: FktTableSortEvent | null;
    filters?: {
        name?: string;
    };
}

@Injectable({ providedIn: 'root' })
export class UsersService {
    private async load() {
        const res = await fetch('api/users.json');
        await wait(300);

        const data: {results: User[]; total: number} = await res.json();
        return data;
    }

    async getAll(params?: UserQueryParams) {
        const { page = 1, pageSize = 5, sort, filters } = params ?? {};

        const response = await this.load();
        let results = response.results;

        if (sort)
            results = [...results].sort((current, next) => {
                const currentValue = String(current[sort.property as keyof User]);
                const nextValue = String(next[sort.property as keyof User]);
                const comparison = currentValue.localeCompare(nextValue, undefined, {
                    numeric: true,
                });
                return sort.direction === 'asc' ? comparison : -comparison;
            });

        if (filters?.name)
            results = results.filter((user) =>
                user.name.toLowerCase().includes(filters.name?.toLowerCase() ?? '')
            );

        const total = results.length;
        const start = (page - 1) * pageSize;

        return {
            results: results.slice(start, start + pageSize),
            total,
        };
    }
}

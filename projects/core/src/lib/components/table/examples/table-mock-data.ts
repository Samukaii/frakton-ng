import {userMainAction, users} from './loading-state/fkt-table-examples-loading-state.component'
import { productMainAction, products } from './product-table/fkt-table-examples-product-table.component';
import {taskMainAction, tasks} from './task-table/fkt-table-examples-task-table.component'

export type { User } from './loading-state/fkt-table-examples-loading-state.component';
export type { Product } from './product-table/fkt-table-examples-product-table.component';
export type { Task } from './task-table/fkt-table-examples-task-table.component';

export const userData = {
	userMainAction,
	users,
}

export const productData = {
	productMainAction,
	products,
}

export const taskData = {
	taskMainAction,
	tasks,
}

import { createAction, props } from '@ngrx/store';
import { EmployeeDet } from '../model/employee-det';

export const addEmployee = createAction(
  '[Employee] Add Employee',
  (employee: EmployeeDet) => ({ employee })
);

export const deleteEmployee = createAction(
  '[Employee] Delete Employee',
  (employee: EmployeeDet) => ({ employee })
);

export const resetEmployee = createAction('[Employee] Reset Employee');


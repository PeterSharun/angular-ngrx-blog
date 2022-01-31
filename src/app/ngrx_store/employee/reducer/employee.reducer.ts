import { createReducer, on } from '@ngrx/store';
import { EmployeeDet } from '../model/employee-det';
import {
  addEmployee,
  deleteEmployee,
  resetEmployee,
} from '../action/employee.actions';

export const employeeFeatureKey = 'employee';

export interface EmployeeState {
  employee: EmployeeDet[];
}

export const initialState: EmployeeState = {
  employee: [],
};

export const reducer = createReducer(
  initialState,
  // Add Employee
  on(addEmployee, (state: EmployeeState, { employee }) => ({
    ...state,
    employee: [...state.employee, employee],
  })),
  // Delete Employee
  on(deleteEmployee, (state: EmployeeState, { employee }) => {
    let indexToRem = state.employee.findIndex(
      (emp) => emp.name == employee.name
    );
    let empList = JSON.parse(JSON.stringify(state.employee));
    if (indexToRem != -1) empList.splice(indexToRem, 1);
    console.log(empList);
    return {
      ...state,
      employee: empList,
    };
  }),
  // Reset Employee
  on(resetEmployee, (state) => ({
    ...state,
    employee: [],
  }))
);

export function employeeReducer(state, action) {
  return reducer(state, action);
}

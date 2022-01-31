import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEmployee from '../reducer/employee.reducer';

export const selectCustomerState =
  createFeatureSelector<fromEmployee.EmployeeState>(
    fromEmployee.employeeFeatureKey
  );

export const selectEmployee = createSelector(
  selectCustomerState,
  (state: fromEmployee.EmployeeState) => state.employee
);


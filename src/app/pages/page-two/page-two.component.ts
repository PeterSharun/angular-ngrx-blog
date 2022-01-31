import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addEmployee } from 'src/app/ngrx_store/employee/action/employee.actions';
import { EmployeeDet } from 'src/app/ngrx_store/employee/model/employee-det';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
})
export class PageTwoComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onAddEmp(name, age) {
    const employee = new EmployeeDet();
    employee.name = name;
    employee.age = age;
    this.store.dispatch(addEmployee(employee));
  }
}

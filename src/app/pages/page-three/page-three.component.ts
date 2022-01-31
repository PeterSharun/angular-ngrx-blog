import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteEmployee } from 'src/app/ngrx_store/employee/action/employee.actions';
import { EmployeeDet } from 'src/app/ngrx_store/employee/model/employee-det';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onDeleteEmp(name) {
    const employee = new EmployeeDet();
    employee.name = name;
    this.store.dispatch(deleteEmployee(employee));
  }
}


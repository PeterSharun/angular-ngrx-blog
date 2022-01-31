import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmployeeDet } from '../../../app/ngrx_store/employee/model/employee-det';
import { selectEmployee } from '../../../app/ngrx_store/employee/selector/employee.selectors';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
})
export class PageOneComponent implements OnInit {
  employee$: Observable<EmployeeDet[]>; 

  constructor(private store: Store) {
    this.employee$ = this.store.select(selectEmployee);
  }

  ngOnInit(): void {}
}


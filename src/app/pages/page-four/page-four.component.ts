import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetEmployee } from '../../../app/ngrx_store/employee/action/employee.actions';
@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.component.html',
  styleUrls: ['./page-four.component.scss'],
})
export class PageFourComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onResetEmp() {
    this.store.dispatch(resetEmployee());
  }
}


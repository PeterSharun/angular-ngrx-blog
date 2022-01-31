import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { employeeReducer } from './ngrx_store/employee/reducer/employee.reducer';
import { PageFourComponent } from './pages/page-four/page-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ employee: employeeReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [PageOneComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PageThreeComponent } from './pages/page-three/page-three.component';
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
  {
    path: 'pageOne',
    component: PageOneComponent,
  },
  {
    path: 'pageTwo',
    component: PageTwoComponent,
  },
  {
    path: 'pageThree',
    component: PageThreeComponent,
  },
  { path: '', redirectTo: 'pageOne', pathMatch: 'full' },
  { path: '**', redirectTo: 'pageOne' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

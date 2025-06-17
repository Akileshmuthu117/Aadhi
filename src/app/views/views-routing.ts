import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DailybundleComponent } from './dailybundle/dailybundle.component';
import { TempadvanceComponent } from './tempadvance/tempadvance.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dailybundle',
    component: DailybundleComponent
  },
  {
    path: 'tempadvance',
    component: TempadvanceComponent
  }
];    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRouting {}

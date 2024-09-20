import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { LogComponent } from './login/log/log.component';
import { ListeComponent } from './liste/liste.component';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: "", component: LogComponent
  },
  {
    path: "navbar", component: NavbarComponent
  },
  {
    path: "list", component: ListeComponent
  },
  {
    path: "form", component: FormComponent
  },
  {
    path: "board", component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

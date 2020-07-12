import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {PassComponent} from "./pass/pass.component";


const routes: Routes = [
  {component: FormComponent, path: ""},
  {component: PassComponent, path: "pass"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

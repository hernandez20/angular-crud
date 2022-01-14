import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';


import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component'
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

const routes: Routes = [

 
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'edit-employee/:id', component: EditEmployeeComponent},
  {path: '', pathMatch:'full', redirectTo:'list-employee'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

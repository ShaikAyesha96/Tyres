import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTyresComponent } from './add-tyres/add-tyres.component';
import { ListTyresComponent } from './list-tyres/list-tyres.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateTyresComponent } from './update-tyres/update-tyres.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component:HomeComponent, path:''},
  {component:AddTyresComponent, path:'add'},
  {component:ListTyresComponent, path:'list'},
  {component:UpdateTyresComponent, path:'update/:id'},
  {component:LoginComponent, path:'login'},
  {component:RegisterComponent, path:'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

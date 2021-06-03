import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTyresComponent } from './add-tyres/add-tyres.component';
import { UpdateTyresComponent } from './update-tyres/update-tyres.component';
import { ListTyresComponent } from './list-tyres/list-tyres.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTyresComponent,
    UpdateTyresComponent,
    ListTyresComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

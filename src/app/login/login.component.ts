import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
 email:string;
 password:string;
  

  constructor(private resto:CommonService ,private router:Router) { }

  ngOnInit(): void {
  }
logInUser(){
 if(this.email=="admin@gmail.com" && this.password=="12345678"){
   this.router.navigate(["/list"]);
 }
 else{
   alert("please enter valid details");
 }
}
}

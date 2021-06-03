import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 regityres=new FormGroup({
  email:new FormControl(''),
  password:new FormControl(''),
  confirmpassword:new FormControl(''),
  

})

  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  reguser(){
    console.log(this.regityres.value);
    this.resto.regityres(this.regityres.value).subscribe((result)=>{
      console.log(result,"data created sucessfull");
    })
  }
}


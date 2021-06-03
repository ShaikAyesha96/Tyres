import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-tyres',
  templateUrl: './add-tyres.component.html',
  styleUrls: ['./add-tyres.component.css']
})
export class AddTyresComponent implements OnInit {
  alert:boolean=false;
  addtyres=new FormGroup({
    vehicle:new FormControl(''),
    tyre:new FormControl(''),
    mobile:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })
  constructor(private tyres:CommonService) { }

  ngOnInit(): void {
  }
  craetetyres(){
    this.tyres.addresto(this.addtyres.value).subscribe((result)=>{
      this.alert=true;
      this.addtyres.reset({});
      console.log("Get Data from Service",result);
    })
  }
closeAlert(){
  this.alert=false;
}
}

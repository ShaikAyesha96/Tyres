import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-update-tyres',
  templateUrl: './update-tyres.component.html',
  styleUrls: ['./update-tyres.component.css']
})
export class UpdateTyresComponent implements OnInit {
  public collection:any;
 edittyres=new FormGroup({
   vehicle:new FormControl(''),
   tyre:new FormControl(''),
    mobile:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
 })
  alert: boolean;
  constructor(private resto:CommonService,private router:ActivatedRoute){ }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.edittyres= new FormGroup({
        vehicle: new FormControl(result['vehicle']),
        tyre: new FormControl(result['tyre']),
        mobile: new FormControl(result['mobile']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email'])
      })
    })
   
}
updatetyres(){
  this.resto.updateResto(this.router.snapshot.params.id,this.edittyres.value).subscribe((result)=>{
    console.log(result,"data updated successfull")
    this.alert=true;
    this.edittyres.reset({});
  });
}
closeAlert(){
  this.alert=false;
}

}

 
     

   
 
  
  

  


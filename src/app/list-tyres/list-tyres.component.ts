import { Component, OnInit,EventEmitter, Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-tyres',
  templateUrl: './list-tyres.component.html',
  styleUrls: ['./list-tyres.component.css']
})
export class ListTyresComponent implements OnInit {

public collection:any;
  constructor(private commonser:CommonService) { }

  ngOnInit(): void {
    this.commonser.gettyreslist().subscribe((result) =>{
    this.collection=(result);
    });
  }
 
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {

  Index_Number;
  FieldType=[];
  LabelName = [];
  containers = [];
  ControlIndex = 1;
  ObjectCollection = [];	// json Object
  MDivID; // id of Mdivs
  MaxOfControlIndex = 1;
  BtnApplyID_String = 8;	// substring of BtnApply id
  BtnCancelID_String = 9;	// substring of BtnCancel id
  MDivID_String = 4;	// substring of Mdiv id
  
  noOfLabels = 0;
  noOfFields = 0;
  constructor() { }

  ngOnInit() {
  }

  forDiv(event): void {

    this.FieldType[this.noOfFields++] = event.target.attributes.FieldType.value;
    this.LabelName[this.noOfLabels++] = event.target.attributes.label.value;

    this.containers.push(this.containers.length);

   }

   doBtnApply(event): void {

    this.Index_Number = event.target.attributes.id.value.substring( [this.BtnApplyID_String ] )
    
   }

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {

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
  testhtml="yes"
  noOfLabels = 0;
  noOfFields = 0;
  constructor() { }

  ngOnInit() {
  }

  forDiv(event): void {

    const target = event.target;
    this.FieldType[this.noOfFields++] = target.attributes.FieldType.value;
    this.LabelName[this.noOfLabels++] = target.attributes.label.value;

    this.containers.push(this.containers.length);

   
   }

}


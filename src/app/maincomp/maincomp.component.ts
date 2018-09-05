import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {
//mobile=[]
  public selectedValue;
  InputValues
  InputValuesArray = []
  deleteMdiv =[];
  FieldType=[];
  LabelName = [];
  containers = [];
  ControlIndex = 1;
  ObjectCollection = [];	// json Object
  MDivID; // id of Mdivs
  MaxOfControlIndex = 1;
  MDivID_String = 4;	// substring of Mdiv id
  
  noOfLabels = 0;
  noOfFields = 0;
  InputValueIncrement = 0;

  constructor() { }

  ngOnInit() {
  }

  forDiv(event): void {

    this.FieldType[this.noOfFields++] = event.target.attributes.FieldType.value;
    this.LabelName[this.noOfLabels++] = event.target.attributes.label.value;

    this.containers.push(this.containers.length);

   }

   doBtnApply(event): void {
  
    console.log(this.InputValues);
    this.InputValuesArray[event] = this.InputValues
    console.log(this.InputValuesArray);

   }

   doBtnCancel(event): void {
 
    this.deleteMdiv[event] = false;

   }

   onKey(event: any) {

    this.InputValues = event.target.value ;
    
  }

  

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {

  InputValues
  SpanArray1 = []
  SpanArray2 = []
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

   doBtnApply(spanwa): void {
    // this.InputValues = spanwa.value
    
    
  
  /*   console.log(this.InputValues);
    this.SpanArray[event] = this.InputValues
    console.log(this.SpanArray); */

   }

   doBtnCancel(event): void {
 


   }

/*    onKey(event: any) {

    this.InputValues = event.target.value ;
    
  } */

  

}


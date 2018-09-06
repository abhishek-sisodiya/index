import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {

  MdivExpanded = [] //boolean values to hide Mdivs on BtnCancel click
  ChildDivExpanded =[] //boolean values to hide ChildDiv on BtnApply click
  BtnApplyExpanded =[] //boolean values to hide ApplyBtn on BtnApply click
  SpanArray1 = [] //Span1 Values
  SpanArray2 = [] //Span2 Values
  FieldType=[]; //attr.FieldType name
  LabelName = []; //attr.Label name
  containers = []; //Holding Mdivs id
  //ControlIndex = 0;
  noOfLabels = 0; //Incrementer for LabelName[]
  noOfFields = 0; //Incrementer for FieldType[]

  constructor() { }

  ngOnInit() {
  }

  forDiv(event): void {
    
    this.ChildDivExpanded.push(true)
    this.BtnApplyExpanded.push(true)
    this.MdivExpanded.push(true)
    
    this.FieldType[this.noOfFields++] = event.target.attributes.FieldType.value;
    this.LabelName[this.noOfLabels++] = event.target.attributes.label.value;

    this.containers.push(this.containers.length);
    console.log(this.containers);
   }

   doBtnApply(event): void {
     
     
  
    this.ChildDivExpanded[event] = false
    this.BtnApplyExpanded[event] = false
  
  /*   console.log(this.InputValues);
    this.SpanArray[event] = this.InputValues
    console.log(this.SpanArray); */

   }

   doBtnCancel(event): void {

    this.MdivExpanded[event] = false
   
   }

/*    onKey(event: any) {

    this.InputValues = event.target.value ;
    
  } */


  contentDiv(event): void {
 
    this.ChildDivExpanded[event] = true
    this.BtnApplyExpanded[event] = true

  }

  buttonClear(): any {
 
    this.MdivExpanded.fill(false);
   // this.ControlIndex = 0;
   console.log(this.containers);
   this.containers=[]
  console.log(this.containers);
   
  }
  

}


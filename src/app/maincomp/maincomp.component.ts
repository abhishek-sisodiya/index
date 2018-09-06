import { Component, OnInit } from '@angular/core';
import { localeInfo } from '@telerik/kendo-intl';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})

export class MaincompComponent implements OnInit {

  ChildDivExpanded = [] //boolean values to hide ChildDiv on BtnApply click
  BtnApplyExpanded = [] //boolean values to hide ApplyBtn on BtnApply click
  SpanArray1 = [] //Span1 Values
  SpanArray2 = [] //Span2 Values
  FieldType = []; //attr.FieldType name
  LabelName = []; //attr.Label name
  containers = []; //Holding boolean values for mdiv creation
  //ControlIndex = 0;
  noOfLabels = 0; //Incrementer for LabelName[]
  noOfFields = 0; //Incrementer for FieldType[]
  MultiSelectdata = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan']; //itmes for kendo multiSelect
  // items = ['a','b','c','d','e'] //for kendo Menu

  constructor() { }

  ngOnInit() { }

  forDiv(event): void {

    this.ChildDivExpanded.push(true)
    this.BtnApplyExpanded.push(true)
    this.containers.push(true);

    this.FieldType[this.noOfFields++] = event.target.attributes.FieldType.value;
    this.LabelName[this.noOfLabels++] = event.target.attributes.label.value;

  }

  doBtnApply(event): void {

    this.ChildDivExpanded[event] = false
    this.BtnApplyExpanded[event] = false

  }

  doBtnCancel(event): void {

    this.containers[event] = 'DeletedDiv'
    // this.containers.filter(Boolean)

  }

  /*    onKey(event: any) {
  
      this.InputValues = event.target.value ;
      
    } */


  contentDiv(event): void {

    this.ChildDivExpanded[event] = true
    this.BtnApplyExpanded[event] = true

  }

  buttonClear(): any {
    // .fill to empty arrray

    this.containers = []
    console.log(this.containers);
    
    // this.containers.fill(false);
    // this.containers = this.containers.filter(Boolean)
    
  }

  /*   trackByFn(index,item){
  
      return index.MdivExpanded; // myCustomIndex should be unique
  
    } */


  getValues(): void {

    console.log(this.containers.filter(Boolean));
    console.log(this.BtnApplyExpanded);
    console.log(this.containers);


    for (let i: number = 0; i < this.containers.length; i++) {
      if (this.BtnApplyExpanded[i] != this.containers[i]) {
        if (this.containers[i] != 'DeletedDiv') {
          console.log("JSON saved for div", i);
        }
      }

      else {
        console.log("Please APPLY on div", i);

      }

    }

  }



}


import { Component, OnInit } from '@angular/core';
import { localeInfo } from '@telerik/kendo-intl';
import { empty } from 'rxjs';

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
  ForFieldType = ['CONTROL_TEXT', 'CONTROL_DROPDOWN', 'CONTROL_OPERATOR', 'CONTROL_DATETIME', 'CONTROL_BOOLEAN', 'CONTROL_TAG', 'CONTROL_textOp']
  LabelName = []; //attr.Label name
  containers = []; //Holding boolean values for mdiv creation
  //ControlIndex = 0;
  noOfLabels = 0; //Incrementer for LabelName[]
  noOfFields = 0; //Incrementer for FieldType[]
  MultiSelectdata = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan']; //itmes for kendo multiSelect
  // items = ['a','b','c','d','e'] //for kendo Menu
  item = [] //For JsonObj
  ObjectCollection = [] //JsonObj
  public source: Array<string> = ['textName', 'List', 'operation', 'dateTime', 'bool', 'tag', 'textOp'];
  DropdownData = []


  constructor() {
    this.DropdownData = this.source.slice();
   }

  ngOnInit() { }


  public filterChange(filter: any): void {    
    this.DropdownData = this.source.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
}


  forDiv(event): void {
    console.log(this.containers);

    this.ChildDivExpanded.push(true)
    this.BtnApplyExpanded.push(true)
    this.containers.push(true);

    this.LabelName[this.noOfLabels++] = event.item.text;

    if(event.item.text == 'textName'){
      this.FieldType[this.noOfFields++] = this.ForFieldType[0]
    }
    if(event.item.text == 'List'){
      this.FieldType[this.noOfFields++] = this.ForFieldType[1]
    }
    if(event.item.text == 'operation'){
      this.FieldType[this.noOfFields++] = this.ForFieldType[2]
    }
    if(event.item.text == 'dateTime'){
      this.FieldType[this.noOfFields++] = this.ForFieldType[3]
    }
    if(event.item.text == 'bool'){
      this.FieldType[this.noOfFields++] = this.ForFieldType[4]
    }
    if(event.item.text == 'tag'){
      this.FieldType[this.noOfFields++] = this.ForFieldType[5]
    }
    if(event.item.text == 'textOp'){
      this.FieldType[this.noOfFields++] = this.ForFieldType[6]
    }
    

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
 
    this.containers = [];
    
    console.log(this.containers);

    // this.containers.fill(false);
    // this.containers = this.containers.filter(Boolean)

  }

  /*   trackByFn(index,item){
  
      return index.MdivExpanded; // myCustomIndex should be unique
  
    } */


  getValues(): void {


    for (let i: number = 0; i < this.containers.length; i++) {
      this.item = []
      if (this.BtnApplyExpanded[i] != this.containers[i]) {
        if (this.containers[i] != 'DeletedDiv') {
          if (this.SpanArray1[i] != empty && this.SpanArray1[i] != undefined) {
            // ObjectCollection[i] = this.SpanArray1[i]
            this.item["TypeControl"] = this.FieldType[i];
            this.item["SeqNumber"] = i;
            this.item["LabelName"] = this.LabelName[i];
            this.item["Value1"] = this.SpanArray1[i];
            this.item["Value2"] = this.SpanArray2[i];
            this.ObjectCollection[i] = this.item
            if (this.item["Value2"] == undefined) {
              delete this.item["Value2"]
            }
            console.log("JSON saved for div", i);

          }
          else {
            console.log("Please select some value for div", i);

          }
        }
      }

      else {
        console.log("Please APPLY on div", i);
      }
    }


    console.log(this.ObjectCollection);


  }

}


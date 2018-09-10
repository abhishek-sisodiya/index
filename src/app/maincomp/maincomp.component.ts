import { Component, OnInit } from '@angular/core';
import { localeInfo } from '@telerik/kendo-intl';
import { empty } from 'rxjs';
import { sequence } from '@angular/animations';

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
  noOfLabels = 0; //Incrementer for LabelName[]
  noOfFields = 0; //Incrementer for FieldType[]
  MultiSelectdata = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan']; //itmes for kendo multiSelect
  item = {}; //For JsonObj
  ObjectCollection = []; //JsonObj
  public source: Array<string> = ['textName', 'List', 'operation', 'dateTime', 'bool', 'tag', 'textOp'];
  DropdownData = [];
  ValueFromInputText;
  json_object_2;
  ControlIndex = 0;
  dateFrom = [];
  dateTo = [];

  constructor() {
    this.DropdownData = this.source.slice();
  }

  ngOnInit() { }


  /*   public filterChange(filter: any): void {
      this.DropdownData = this.source.filter((s) => s.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    } */


  forDiv(event): void {

    this.ChildDivExpanded[this.ControlIndex] = true
    this.BtnApplyExpanded[this.ControlIndex] = true
    this.containers[this.ControlIndex] = true
    this.LabelName[this.ControlIndex] = event.item.text;
    /*  for (let i: number = 0; i < this.containers.length; i++) {
       if (event.item.text == this.source[i]) {
         this.FieldType[this.noOfFields++] = this.ForFieldType[i]
       }
     } */

    if (event.item.text == 'textName') {
      this.FieldType[this.ControlIndex] = this.ForFieldType[0]
    }
    if (event.item.text == 'List') {
      this.FieldType[this.ControlIndex] = this.ForFieldType[1]
    }
    if (event.item.text == 'operation') {
      this.FieldType[this.ControlIndex] = this.ForFieldType[2]
    }
    if (event.item.text == 'dateTime') {
      this.FieldType[this.ControlIndex] = this.ForFieldType[3]
    }
    if (event.item.text == 'bool') {
      this.FieldType[this.ControlIndex] = this.ForFieldType[4]
    }
    if (event.item.text == 'tag') {
      this.FieldType[this.ControlIndex] = this.ForFieldType[5]
    }
    if (event.item.text == 'textOp') {
      this.FieldType[this.ControlIndex] = this.ForFieldType[6]
    }

    this.ControlIndex++
  }

  doBtnApply(event): void {


    if (this.FieldType[event] == 'CONTROL_DATETIME') {
      if (this.dateFrom[event] != undefined && this.dateTo[event] != undefined) {

        let day = this.dateFrom[event].getDate();
        let month = this.dateFrom[event].getMonth() + 1;
        let year = this.dateFrom[event].getFullYear();
        let dateOut1 = [day, month, year].join('/');
  
        this.SpanArray1[event] = dateOut1
       
        day = this.dateTo[event].getDate();
        month = this.dateTo[event].getMonth() + 1;
        year = this.dateTo[event].getFullYear();
        let dateOut2 = [day, month, year].join('/');
  
        this.SpanArray2[event] = dateOut2

        this.ChildDivExpanded[event] = false
        this.BtnApplyExpanded[event] = false

      }

    }

    if (this.FieldType[event] == 'CONTROL_OPERATOR' || this.FieldType[event] == 'CONTROL_DATETIME' || this.FieldType[event] == 'CONTROL_textOp') {
      if (this.SpanArray1[event] == null || this.SpanArray2[event] == null) {
        console.log("please fill values");
      }
      else {

        this.ChildDivExpanded[event] = false
        this.BtnApplyExpanded[event] = false
      }
    }
    else {
      if (this.SpanArray1[event] == null) {
        console.log("please fill values");
      }
      else {
        this.ChildDivExpanded[event] = false
        this.BtnApplyExpanded[event] = false
      }
    }
        



  }

  doBtnCancel(event): void {

    this.containers[event] = 'DeletedDiv'
    // this.containers.filter(Boolean)

  }

  /*    onKey(event: any) {
  
      this.InputValues = event.target.value ;
      
    } */

  omit_special_char(event) {
    var k;
    k = event.charCode;  //      (Both can be used)       
    k = event.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123));
  }


  contentDiv(event): void {

    this.ChildDivExpanded[event] = true
    this.BtnApplyExpanded[event] = true

  }


  buttonClear(): any {
    // .fill to empty arrray

    this.containers = [];
    this.ControlIndex = 0;

    console.log(this.containers);

    // this.containers.fill(false);
    // this.containers = this.containers.filter(Boolean)

  }

  /*   trackByFn(index,item){
  
      return index.MdivExpanded; // myCustomIndex should be unique
  
    } */


  getValues(): void {

    this.ObjectCollection = []

    for (let i: number = 0; i < this.containers.length; i++) {
      this.item = {}
      if (this.BtnApplyExpanded[i] != this.containers[i]) {
        if (this.containers[i] != 'DeletedDiv') {
          if (this.SpanArray1[i] != empty && this.SpanArray2[i] != empty) {
            // ObjectCollection[i] = this.SpanArray1[i]
            this.item["SeqNumber"] = i;
            this.item["LabelName"] = this.LabelName[i];
            this.item["Value1"] = this.SpanArray1[i];
            this.item["Value2"] = this.SpanArray2[i];
            this.ObjectCollection[i] = this.item;
            if (this.item["Value2"] == undefined) {
              delete this.item["Value2"];
            }
            console.log("JSON saved for div", i);

          }
          else {
            console.log("Please select some value for div", i);

          }
          console.log(this.ObjectCollection);
        }
      }

      else {
        console.log("Please APPLY on div", i);
      }
    }


  }


  createControl_FromDatabase(): void {

    //.mdiv remove
    this.containers = []

    this.json_object_2 = JSON.parse(this.ValueFromInputText);

    var newArray = new Array();
    for (var i = 0; i < this.json_object_2.length; i++) {
      if (this.json_object_2[i]) {
        newArray.push(this.json_object_2[i]);
      }
    }
    console.log(newArray);

    this.fromJSON(newArray);

  }


  fromJSON(jsonObj): void {

    let Array_SeqNumber = [];

    jsonObj.forEach(index => {

      let LabelName = index.LabelName;
      let SeqNumber = index.SeqNumber;
      let Value1 = index.Value1;
      let Value2 = index.Value2;
      let Operator = index.Operator;

      this.containers[SeqNumber] = true

      this.LabelName[SeqNumber] = LabelName;

      this.SpanArray1[SeqNumber] = Value1

      if (Value2 != undefined) {
        this.SpanArray2[SeqNumber] = Value2
      }
      else {
        this.SpanArray2[SeqNumber] = Operator
      }


      this.ChildDivExpanded[SeqNumber] = false
      this.BtnApplyExpanded[SeqNumber] = false

      if (LabelName == 'textName') {
        this.FieldType[SeqNumber] = this.ForFieldType[0]
      }
      if (LabelName == 'List') {
        this.FieldType[SeqNumber] = this.ForFieldType[1]
      }
      if (LabelName == 'operation') {
        this.FieldType[SeqNumber] = this.ForFieldType[2]
      }
      if (LabelName == 'dateTime') {
        this.FieldType[SeqNumber] = this.ForFieldType[3]
      }
      if (LabelName == 'bool') {
        this.FieldType[SeqNumber] = this.ForFieldType[4]
      }
      if (LabelName == 'tag') {
        this.FieldType[SeqNumber] = this.ForFieldType[5]
      }
      if (LabelName == 'textOp') {
        this.FieldType[SeqNumber] = this.ForFieldType[6]
      }
      Array_SeqNumber.push(SeqNumber);

    });

    let MaxOfControlIndex = Math.max.apply(Math, Array_SeqNumber);
    this.ControlIndex = MaxOfControlIndex + 1;

  }

}
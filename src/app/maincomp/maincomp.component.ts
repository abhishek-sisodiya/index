import { Component, OnInit } from '@angular/core';
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
  LabelName = []; //attr.Label name
  containers = []; //Holding boolean values for mdiv creation
  MultiSelectdata = ['a', 'b', 'c', 'd', 'e']; //itmes for kendo multiSelect
  item = {}; //For JsonObj
  ObjectCollection = []; //JsonObj
  ValueFromInputText; // json input type
  json_object_2; //createControl_FromDatabase jsonObj
  ControlIndex = 0;
  dateFrom = []; //for kendo datepicker
  dateTo = []; //for kendo datepicker

  constructor() { }

  ngOnInit() { }

  forDiv(event): void {

    this.ChildDivExpanded[this.ControlIndex] = true
    this.BtnApplyExpanded[this.ControlIndex] = true
    this.containers[this.ControlIndex] = true
    this.LabelName[this.ControlIndex] = event.item.text;

    this.ControlIndex++
  }

  doBtnApply(event): void {

    console.log(this.BtnApplyExpanded);
    

    if (this.LabelName[event] == 'dateTime') {
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

    if (this.LabelName[event] == 'operation' || this.LabelName[event] == 'dateTime' || this.LabelName[event] == 'textOp') {
      if (this.SpanArray1[event] == null || this.SpanArray2[event] == null) {
        alert("please fill values");
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
    this.SpanArray1 = [];
    this.SpanArray2 = [];
    // this.containers.fill(false);
    // this.containers = this.containers.filter(Boolean)
  }


  getValues(): void {

    this.ObjectCollection = [];
    let count = 0;

    console.log(this.BtnApplyExpanded)
    console.log(this.containers)
    console.log(this.SpanArray1)
    console.log(this.SpanArray2)

    for (let i: number = 0; i < this.containers.length; i++) {
      if (this.containers[i] != 'DeletedDiv' && this.containers[i] != null || this.BtnApplyExpanded[i] == empty) {
        if (this.BtnApplyExpanded[i] == true) {

          alert("Pleaseeeeeeeee APPLY on div" + i);
          count++;
        }
      }
    }

    if (count == 0) {
      for (let i: number = 0; i < this.containers.length; i++) {
        this.item = {}
        // if (this.SpanArray1[i] != null || this.SpanArray2[i] != null && this.containers[i] != 'DeletedDiv' && this.containers[i] != null || this.BtnApplyExpanded[i] == true  && this.BtnApplyExpanded[i] == empty) {
        if (this.containers[i] != 'DeletedDiv' && this.containers[i] != null) {
          if (this.BtnApplyExpanded[i] != this.containers[i]) {
            if (this.containers[i] != 'DeletedDiv') {

              this.item["SeqNumber"] = i;
              this.item["LabelName"] = this.LabelName[i];
              if (this.LabelName[i] == "operation" || this.LabelName[i] == "textOp") {
                this.item["Operator"] = this.SpanArray1[i];
              }
              else {
                this.item["Value1"] = this.SpanArray1[i];
              }
              this.item["Value2"] = this.SpanArray2[i];
              this.ObjectCollection[i] = this.item;
              if (this.item["Value2"] == undefined) {
                delete this.item["Value2"];
              }
              alert("JSON saved for div" + i);
            }
            else {
              alert("Please select some value for div" + i);
            }
          }

        }

        // } else {
        //   alert("Please APPLY on div" + i);
        //   break;
        // }
      }
    }

    let newArray = new Array();
    for (var i = 0; i < this.ObjectCollection.length; i++) {
      if (this.ObjectCollection[i]) {
        newArray.push(this.ObjectCollection[i]);
      }
    }
    console.log(newArray);
  }


  createControl_FromDatabase(): void {

    this.dateTo = []
    this.dateFrom = [];
    this.ObjectCollection = []
    this.BtnApplyExpanded = []
    this.containers = []
    this.ControlIndex = 0;
    this.SpanArray1 = [];
    this.SpanArray2 = [];
    this.json_object_2 = JSON.parse(this.ValueFromInputText);
    this.fromJSON(this.json_object_2);
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
      this.SpanArray2[SeqNumber] = Value2

      if (Value1 != undefined) {
        this.SpanArray1[SeqNumber] = Value1
      }
      else {
        this.SpanArray1[SeqNumber] = Operator
      }

      this.ChildDivExpanded[SeqNumber] = false
      this.BtnApplyExpanded[SeqNumber] = false

      Array_SeqNumber.push(SeqNumber);
    });

    let MaxOfControlIndex = Math.max.apply(Math, Array_SeqNumber);
    this.ControlIndex = MaxOfControlIndex + 1;

  }

}
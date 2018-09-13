import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { items } from './items';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})

export class MaincompComponent implements OnInit {

  public items: any[] = items;
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
  FieldType = []; //attr.FieldType name
  // ForFieldType = ['CONTROL_TEXT', 'CONTROL_DROPDOWN', 'CONTROL_OPERATOR', 'CONTROL_DATETIME', 'CONTROL_BOOLEAN', 'CONTROL_TAG', 'CONTROL_textOp']
  ForFieldType = ['CONTROL_TEXT', 'CONTROL_DROPDOWN', 'CONTROL_OPERATOR', 'CONTROL_DATETIME', 'CONTROL_BOOLEAN', 'CONTROL_TAG', 'CONTROL_textOp']

  constructor() { }

  ngOnInit() { }

  forDiv(event): any {

    if (event.item.text == 'Menu' || event.item.text == 'Saved Filters' || event.item.text == 'Activity') {
      return false;
    } else {

      this.ChildDivExpanded[this.ControlIndex] = true;
      this.BtnApplyExpanded[this.ControlIndex] = true;
      this.containers[this.ControlIndex] = true;
      this.LabelName[this.ControlIndex] = event.item.text;


      if (event.item.text == 'List Name') {
        this.FieldType[this.ControlIndex] = this.ForFieldType[0]
      }
      else if (event.item.text == 'List Number') {
        this.FieldType[this.ControlIndex] = this.ForFieldType[0]
      }
      else if (event.item.text == 'Records') {
        this.FieldType[this.ControlIndex] = this.ForFieldType[2]
      }
      else if (event.item.text == 'Seed Lists') {
        this.FieldType[this.ControlIndex] = this.ForFieldType[4]
      }
      else if (event.item.text == 'Tag') {
        this.FieldType[this.ControlIndex] = this.ForFieldType[5]
      }
      else if (event.item.text == 'Status') {
        this.FieldType[this.ControlIndex] = this.ForFieldType[5]
      }
      else if (event.item.text == 'Source') {
        this.FieldType[this.ControlIndex] = this.ForFieldType[5]
      }
      else {
        this.FieldType[this.ControlIndex] = this.ForFieldType[3]
      }


      if (event.item.text == 'textOp') {
        this.FieldType[this.ControlIndex] = this.ForFieldType[3]
      }
      if (event.item.text == 'List') {
        this.FieldType[this.ControlIndex] = this.ForFieldType[3]
      }

      this.ControlIndex++;
    }
  }


  doBtnApply(event): void {

    if (this.FieldType[event] == 'CONTROL_DATETIME') {
      if (this.dateFrom[event] != undefined && this.dateTo[event] != undefined) {

        let day = this.dateFrom[event].getDate();
        let month = this.dateFrom[event].getMonth() + 1;
        let year = this.dateFrom[event].getFullYear();
        let dateOut1 = [day, month, year].join('/');

        this.SpanArray1[event] = dateOut1;

        day = this.dateTo[event].getDate();
        month = this.dateTo[event].getMonth() + 1;
        year = this.dateTo[event].getFullYear();
        let dateOut2 = [day, month, year].join('/');

        this.SpanArray2[event] = dateOut2;

        this.ChildDivExpanded[event] = false;
        this.BtnApplyExpanded[event] = false;
      }
    }

    if (this.FieldType[event] == 'CONTROL_OPERATOR' || this.FieldType[event] == 'CONTROL_DATETIME' || this.FieldType[event] == 'CONTROL_textOp') {
      if (this.SpanArray1[event] == null || this.SpanArray2[event] == null || this.SpanArray1[event] == "" || this.SpanArray2[event] == "") {
        alert("Please fill values for " + this.LabelName[event]);
      }
      else {

        this.ChildDivExpanded[event] = false;
        this.BtnApplyExpanded[event] = false;
      }
    }
    else {
      if (this.SpanArray1[event] == null || this.SpanArray1[event] == "") {
        alert("Please fill values for " + this.LabelName[event]);
      }
      else {
        this.ChildDivExpanded[event] = false;
        this.BtnApplyExpanded[event] = false;
      }
    }
  }

  doBtnCancel(event): void {

    this.containers[event] = 'DeletedDiv';
    // this.containers.filter(Boolean)
  }


  omit_special_char(event) {
    let k;
    // k = event.charCode;       //(Both can be used)       
    k = event.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123));
  }


  contentDiv(event): void {

    this.ChildDivExpanded[event] = true;
    this.BtnApplyExpanded[event] = true;
  }


  buttonClear(): any {
    // .fill to empty arrray

    this.containers = [];
    this.ControlIndex = 0;
    this.SpanArray1 = [];
    this.SpanArray2 = [];
    this.LabelName = [];
    this.ChildDivExpanded = [];
    this.BtnApplyExpanded = [];
    this.dateFrom = [];
    this.dateTo = [];
    this.ObjectCollection = [];
    // this.containers.fill(false);
    // this.containers = this.containers.filter(Boolean)
  }


  getValues(): void {

    this.ObjectCollection = [];
    let count = 0;

    for (let i: number = 0; i < this.containers.length; i++) {
      if (this.containers[i] != 'DeletedDiv' && this.containers[i] != null || this.BtnApplyExpanded[i] == empty) {
        if (this.BtnApplyExpanded[i] == true) {

          alert("Please APPLY on " + this.LabelName[i]);
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
              this.item["FieldType"] = this.FieldType[i];
              if (this.FieldType[i] == "CONTROL_OPERATOR" || this.FieldType[i] == "CONTROL_textOp") {
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
              alert("JSON saved for " + this.LabelName[i]);
            }
            else {
              alert("Please select some value for " + this.LabelName[i]);
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


    let x = items[0].items[0].items;
    let y = [];
    y['text'] = newArray
    x.push(y)


    // loop


    /*  let x = items[0].items[0].items;
     // console.log(x);
     
     for (let i: number = 0; i < newArray.length; i++) {
       
       let y = {};
       // y['text'] = newArray[i].LabelName
       y['text'] = newArray[i]
       x.push(y)      
     } */

  


    /* let x = items[0].items[0].items;
    console.log(x);
    let z = [];
    z['text'] = 'New Value';
    x.push(z)
console.log(z[0]);

    let b = []
 
z[0].push(b)    

    b.push(items[0].items[0].items[0].text);
    console.log(b);

    let nowNew = ['a']
    b[0].push(nowNew)
    console.log(b);


    for (let i: number = 0; i < newArray.length; i++) {

      // y['text'] = newArray[i].LabelName
      nowNew[i] = newArray[i]

    }
    console.log(nowNew);

    console.log(z);

    console.log(x); */




  }


  createControl_FromDatabase(event): void {

    this.json_object_2 = []

    this.ChildDivExpanded = [];
    this.LabelName = [];
    this.dateTo = [];
    this.dateFrom = [];
    this.ObjectCollection = [];
    this.BtnApplyExpanded = [];
    this.containers = [];
    this.ControlIndex = 0;
    this.SpanArray1 = [];
    this.SpanArray2 = [];

    //Main From Input Text Box

    /*     this.json_object_2 = JSON.parse(this.ValueFromInputText);
        console.log(this.ValueFromInputText);
        
        this.fromJSON(this.json_object_2); */


        //MAIN From Saved Filter
        this.fromJSON(event.item.text);


    /*  let x
     let y
 
 
     for (let i: number = 0; i < items[0].items[0].items.length; i++) {
       x = items[0].items[0].items[i].text
       this.json_object_2 = "[" + JSON.stringify(x) + "]";
       y = JSON.parse(this.json_object_2);
       this.fromJSON(y);
     } */

    // this.json_object_2 = JSON.parse(x);
    // this.json_object_2 = "["+JSON.parse(x)+"]"



    // console.log(event.item.text[i].LabelName);

    
//MAIN
    /* let x
    let y

    for (let i: number = 0; i < items[0].items[0].items[0].text.length; i++) {
      x = items[0].items[0].items[0].text[i]
      this.json_object_2 = "[" + JSON.stringify(x) + "]";
      y = JSON.parse(this.json_object_2);
      this.fromJSON(y);
    } */


/* y = event.item.text
    console.log(y)
    for (let i: number = 0; i < items[0].items[0].items[0].text.length; i++) {
      x = items[0].items[0].items[0].text[i]
      console.log(x);
    } */


  /*   for (let i: number = 0; i < items[0].items[0].items[0].text.length; i++) {
      x = items[0].items[0].items[0].text[i]
      this.json_object_2 = "[" + JSON.stringify(x) + "]";
      y = JSON.parse(this.json_object_2);
     console.log(x);
     
      console.log(y); 
      
      
    }*/




    // console.log(event);



    // console.log(items[0].items[0].items)

    // console.log(event.item.text[i].LabelName);

    /* this.json_object_2 = []
    let x
    let y

    for (let i: number = 0; i < items[0].items[0].items[0].text.length; i++) {
      
      let labelname = event.item.text[i].LabelName
      console.log(labelname);
      
      if(event.item.text[i].LabelName == items[0].items[0].items[0].text[i])
      {
      x = items[0].items[0].items[i].text[i]
      this.json_object_2 = "[" + JSON.stringify(x) + "]";
      y = JSON.parse(this.json_object_2);
      this.fromJSON(y);
      }
 
    }

*/


  }


  fromJSON(jsonObj): void {

    let Array_SeqNumber = [];

    jsonObj.forEach(index => {
      let LocalLabelName = index.LabelName;
      let SeqNumber = index.SeqNumber;
      let Value1 = index.Value1;
      let Value2 = index.Value2;
      let Operator = index.Operator;

      this.containers[SeqNumber] = true;
      this.LabelName[SeqNumber] = LocalLabelName;
      this.SpanArray2[SeqNumber] = Value2

      if (Value1 != undefined) {
        this.SpanArray1[SeqNumber] = Value1;
      }
      else {
        this.SpanArray1[SeqNumber] = Operator;
      }

      this.ChildDivExpanded[SeqNumber] = false;
      this.BtnApplyExpanded[SeqNumber] = false;


      if (LocalLabelName == 'List Name') {
        this.FieldType[SeqNumber] = this.ForFieldType[0]
      }
      else if (LocalLabelName == 'List Number') {
        this.FieldType[SeqNumber] = this.ForFieldType[0]
      }
      else if (LocalLabelName == 'Records') {
        this.FieldType[SeqNumber] = this.ForFieldType[2]
      }
      else if (LocalLabelName == 'Seed Lists') {
        this.FieldType[SeqNumber] = this.ForFieldType[4]
      }
      else if (LocalLabelName == 'Tag') {
        this.FieldType[SeqNumber] = this.ForFieldType[5]
      }
      else if (LocalLabelName == 'Status') {
        this.FieldType[SeqNumber] = this.ForFieldType[5]
      }
      else if (LocalLabelName == 'Source') {
        this.FieldType[SeqNumber] = this.ForFieldType[5]
      }
      else {
        this.FieldType[SeqNumber] = this.ForFieldType[3]
      }


      if (LocalLabelName == 'textOp') {
        this.FieldType[SeqNumber] = this.ForFieldType[3]
      }
      if (LocalLabelName == 'List') {
        this.FieldType[SeqNumber] = this.ForFieldType[3]
      }

      Array_SeqNumber.push(SeqNumber);
    });

    let MaxOfControlIndex = Math.max.apply(Math, Array_SeqNumber);
    this.ControlIndex = MaxOfControlIndex + 1;

  }

}
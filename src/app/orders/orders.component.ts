import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrdersService } from "../shared/orders.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
export interface Food {
  value: string;
  display: string;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  
  constructor(public ordersService: OrdersService , public _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      questionOne: ['', Validators.required]
   });
   this.secondFormGroup = this._formBuilder.group({
    questionTwo: ['', Validators.required]
   });
   this.thirdFormGroup = this._formBuilder.group({
    questionThree: ['', Validators.required]
 });
 this.fourthFormGroup = this._formBuilder.group({
  questionFour: ['', Validators.required]
});
this.fifthFormGroup = this._formBuilder.group({
  questionFive: ['', Validators.required]
});
this.sixthFormGroup = this._formBuilder.group({
  questionSix: ['', Validators.required]
});
  }

  coffees = [
    "Americano",
    "Flat White",
    "Cappuccino",
    "Latte",
    "Espresso",
    "Machiato",
    "Mocha",
    "Hot Chocolate",
    "Tea"
  ];

  coffeeOrder = [];

  addCoffee = coffee => this.coffeeOrder.push(coffee);

  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  };

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }
}
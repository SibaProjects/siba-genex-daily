import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.getCoffeeOrders();
  }

  coffeeOrders;

  getCoffeeOrders = () =>
    this.ordersService
      .getCoffeeOrders()
      .subscribe(res => (this.coffeeOrders = res));

  deleteOrder = data => this.ordersService.deleteCoffeeOrder(data);

  markCompleted = data => this.ordersService.updateCoffeeOrder(data);
}
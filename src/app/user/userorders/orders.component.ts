import { Component, OnInit } from '@angular/core';
import { User } from '../../User';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
Users: User[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

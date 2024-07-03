import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

report=[
  {
      "name": "Product A",
      "category": "Electronics",
      "damaged": false,
      "quantity": 100,
      "delivered_date": "2023-07-13",
      "damage_status": "Moderately damaged"
  },
  {
      "name": "Product B",
      "category": "Clothing",
      "damaged": true,
      "quantity": 50,
      "delivered_date": "2023-08-26",
      "damage_status": "Slightly damaged"
  },
  {
      "name": "Product C",
      "category": "Food",
      "damaged": false,
      "quantity": 20,
      "delivered_date": "2024-07-11",
      "damage_status": "Severely damaged"
  },
  {
      "name": "Product D",
      "category": "Books",
      "damaged": true,
      "quantity": 75,
      "delivered_date": "2024-01-18",
      "damage_status": "Undamaged"
  },
  {
      "name": "Product E",
      "category": "Home Appliances",
      "damaged": false,
      "quantity": 30,
      "delivered_date": "2023-12-25",
      "damage_status": "Slightly damaged"
  },
  {
      "name": "Product F",
      "category": "Toys",
      "damaged": true,
      "quantity": 40,
      "delivered_date": "2024-02-10",
      "damage_status": "Moderately damaged"
  },
  {
      "name": "Product G",
      "category": "Clothing",
      "damaged": false,
      "quantity": 90,
      "delivered_date": "2024-03-22",
      "damage_status": "Undamaged"
  },
  {
      "name": "Product H",
      "category": "Electronics",
      "damaged": false,
      "quantity": 25,
      "delivered_date": "2023-11-09",
      "damage_status": "Slightly damaged"
  },
  {
      "name": "Product I",
      "category": "Food",
      "damaged": true,
      "quantity": 15,
      "delivered_date": "2024-09-15",
      "damage_status": "Moderately damaged"
  },
  {
      "name": "Product J",
      "category": "Furniture",
      "damaged": false,
      "quantity": 60,
      "delivered_date": "2024-04-12",
      "damage_status": "Undamaged"
  }
]
editItem() {

}
deleteItem() {

}

}

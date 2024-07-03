import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent{
 
//  constructor(private http:HttpClient){}
  // ngOnInit(): void {
  //   this.http.get<any[]>('http://localhost:3000/inventory').subscribe(data=>{
  //     this.inventory=data;
  //     console.log(this.inventory);
  //   })
  // }

  products=[
    {
      "id": 1,
      "name": "Product A",
      "category": "Electronics",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 100
    },
    {
      "id": 2,
      "name": "Product B",
      "category": "Clothing",
      "damaged": true,
      "perishable": false,
      "expiryDate": null,
      "quantity": 50
    },
    {
      "id": 3,
      "name": "Product C",
      "category": "Food",
      "damaged": false,
      "perishable": true,
      "expiryDate": "2024-02-28",
      "quantity": 20
    },
    {
      "id": 4,
      "name": "Product D",
      "category": "Books",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 75
    },
    {
      "id": 5,
      "name": "Product E",
      "category": "Home Appliances",
      "damaged": true,
      "perishable": false,
      "expiryDate": null,
      "quantity": 30
    },
    {
      "id": 6,
      "name": "Product F",
      "category": "Toys",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 40
    },
    {
      "id": 7,
      "name": "Product G",
      "category": "Clothing",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 90
    },
    {
      "id": 8,
      "name": "Product H",
      "category": "Electronics",
      "damaged": true,
      "perishable": false,
      "expiryDate": null,
      "quantity": 25
    },
    {
      "id": 9,
      "name": "Product I",
      "category": "Food",
      "damaged": false,
      "perishable": true,
      "expiryDate": "2024-03-15",
      "quantity": 15
    },
    {
      "id": 10,
      "name": "Product J",
      "category": "Furniture",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 60
    },
    {
      "id": 11,
      "name": "Product K",
      "category": "Tools",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 80
    },
    {
      "id": 12,
      "name": "Product L",
      "category": "Beauty",
      "damaged": true,
      "perishable": false,
      "expiryDate": null,
      "quantity": 35
    },
    {
      "id": 13,
      "name": "Product M",
      "category": "Sports",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 70
    },
    {
      "id": 14,
      "name": "Product N",
      "category": "Kitchen",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 45
    },
    {
      "id": 15,
      "name": "Product O",
      "category": "Health",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 55
    },
    {
      "id": 16,
      "name": "Product P",
      "category": "Pets",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 85
    },
    {
      "id": 17,
      "name": "Product Q",
      "category": "Garden",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 65
    },
    {
      "id": 18,
      "name": "Product R",
      "category": "Stationery",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 95
    },
    {
      "id": 19,
      "name": "Product S",
      "category": "Jewelry",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 20
    },
    {
      "id": 20,
      "name": "Product T",
      "category": "Automotive",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 75
    },
    {
      "id": 21,
      "name": "Product U",
      "category": "Music",
      "damaged": false,
      "perishable": false,
      "expiryDate": null,
      "quantity": 50
    }
  ]
  // inventory:any[]=[];
  editItem() {
    throw new Error('Method not implemented.');
    }
    deleteItem() {
    throw new Error('Method not implemented.');
    }
}

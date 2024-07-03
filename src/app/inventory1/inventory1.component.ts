import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventory1',
  templateUrl: './inventory1.component.html',
  styleUrl: './inventory1.component.css'
})
export class Inventory1Component {

  constructor(private http:HttpClient){

  }

}

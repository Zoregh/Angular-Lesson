import { Component, OnInit, Input } from '@angular/core';
import { Mirg } from '../../Models/Fruit';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
 
  @Input() public currentFruit: any;

  constructor() { }

  ngOnInit() {
    
  }

  weightMinus() {
    if (this.currentFruit.weight > 0) {
      this.currentFruit.weight -= 0.5;
    }
  }
  weightPlus() {
    this.currentFruit.weight += 0.5;
    if (this.currentFruit.weight > 3) {
      alert('Are you kidding me?');
    }
  }

}
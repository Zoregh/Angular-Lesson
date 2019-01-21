import { Component, OnInit } from '@angular/core';
import { Mirg } from '../../../Models/fruit.export';


@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  public pinapple: Mirg = new Mirg(); 


  constructor() { }

  ngOnInit() {
    this.pinapple.name = 'Pineapple';
    this.pinapple.price = 2500;
    this.pinapple.weight = 1;
    this.pinapple.amount = this.pinapple.price * this.pinapple.weight;
  }

  weightMinus() {
    if (this.pinapple.weight > 0) {
      this.pinapple.weight -= 0.5;
      this.pinapple.amount = this.pinapple.price * this.pinapple.weight;
    }
  }
  weightPlus() {
    this.pinapple.weight += 0.5;
    this.pinapple.amount = this.pinapple.price * this.pinapple.weight;
    if (this.pinapple.weight > 3) {
      alert('Are you kidding me?');
    }
  }

}
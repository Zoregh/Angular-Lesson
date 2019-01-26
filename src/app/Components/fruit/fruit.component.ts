import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
 
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
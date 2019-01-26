import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {

  @Input() public currentVegetable: any;

  constructor() { }

  ngOnInit() {
  }

  weightMinus() {
    if (this.currentVegetable.weight > 0) {
      this.currentVegetable.weight -= 0.5;
    }
  }
  weightPlus() {
    this.currentVegetable.weight += 0.5;
  }

}

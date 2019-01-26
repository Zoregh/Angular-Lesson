import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {

  @Input() public currentVegetable: any;

  public getStyles() {
    let styles = {
      'border': '10px solid',
      'border-color': this.currentVegetable.color
    };
    return styles;
  }


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

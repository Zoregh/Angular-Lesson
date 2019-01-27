import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {

  @Input() public currentVegetable: any;

  public getStyles(a) {
    let styles = {
      'border': '10px solid',
      'border-color': a.color
    };
    return styles;
  }


  constructor() { }

  ngOnInit() {
  }

  public weightMinus(a) {
    if (a.weight > 0) {
      a.weight -= 0.5;
    }
  }
  public weightPlus(a) {
    a.weight += 0.5;
  }

}

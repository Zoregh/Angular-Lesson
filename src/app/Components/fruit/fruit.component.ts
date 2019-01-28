import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../../Services/general.service';


@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
 
  @Input() public currentFruit: any;

  constructor(public fruitService:GeneralService) { }

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
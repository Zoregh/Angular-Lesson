import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../../Services/general.service';


@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css'],
  // providers: [GeneralService]

})
export class FruitComponent implements OnInit {
 
  @Input() public currentFruit: any;

  constructor(public fruitService:GeneralService) { }

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
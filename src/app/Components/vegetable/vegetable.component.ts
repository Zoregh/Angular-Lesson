import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css'],
  // providers: [GeneralService]
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


  constructor(private myService:GeneralService) { }

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

import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../../Services/general.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers: [GeneralService]

})
export class ProductComponent implements OnInit {
  @Input() public currentProduct: any;
  
  public getStyles(a) {
    let styles = {
      'color': a.color,
      'border': '10px solid',
      'border-color': a.color,
    };
    return styles;
  }

  constructor(public pruductService:GeneralService) { }

  ngOnInit() {
  }

  public weightMinus(a) {
    if (a.weight > 0) {
      a.weight -= 0.5;
    }
  }
  public weightPlus(a) {
    if(a.countMethod == 'Piece') {
      a.weight +=1;
    } else {
      a.weight += 0.5;
    }
  }


}

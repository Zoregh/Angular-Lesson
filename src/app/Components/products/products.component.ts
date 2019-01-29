import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers: [GeneralService]

})
export class ProductsComponent implements OnInit {
public productsArr: Array<any>;
public productTypes: Array<string> = [];
public typeFilter: string = "all";

  constructor(public pruductService:GeneralService) {
    this.productsArr = this.pruductService.mainArr.slice();
  }

  ngOnInit() {
    this.getTypes();
  }

  getTypes() {
    this.pruductService.mainArr.forEach(product => {
      if (this.productTypes.indexOf(product.type) == -1) {
        this.productTypes.push(product.type);
      }
    });
  }

  filterProducts() {
    if (this.typeFilter == 'all') {
      this.productsArr = this.pruductService.mainArr;  
      return;
    }
    this.productsArr = this.pruductService.mainArr.filter(product => product.type == this.typeFilter);
  }

}

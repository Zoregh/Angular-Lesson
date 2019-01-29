import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // providers: [GeneralService]

})
export class ProductsComponent implements OnInit {
public productsArr: Array<any> = this.pruductService.mainArr;
public fruits: Array<any> = [];
public vegetables: Array<any> = [];



  constructor(public pruductService:GeneralService) { }

  ngOnInit() {
    this.sortProducts();
  }


  public sortProducts(){
    for (let i = 0; i < this.pruductService.mainArr.length; i++){
      if (this.pruductService.mainArr[i].type == 'Friut') {
        this.fruits.push(this.pruductService.mainArr[i]);
      } else if (this.pruductService.mainArr[i].type == 'Vegetable'){
        this.vegetables.push(this.pruductService.mainArr[i])
      }
    }
  }

    allProducts(){
    this.productsArr = this.pruductService.mainArr; 
  }

  onlyFruits(){
    this.productsArr = this.fruits;
  }

  onlyVegetables(){
    this.productsArr = this.vegetables;
  } 
  


}

import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public mainArr: Array<any> = [
    new Product(500, 1, 'Nur', '#DB232E', '../assets/Images/Fruits/nur.png', 'Friut', 'Piece', 1),
    new Product(150, 1, 'Cicak', '#578812',  '../assets/Images/Vegetables/kcu_bibar.png', 'Vegetable', 'Piece', 2),
    new Product(250, 1, 'Apple', '#72010F', '../assets/Images/Fruits/apple.png', 'Friut', 'Kg', 3),
    new Product(300, 1, 'Sergevil', '#FED403', '../assets/Images/Fruits/serkevil.png', 'Friut', 'Kg', 4),
    new Product(300, 1, 'Bazuk', '#8E1324', '../assets/Images/Vegetables/bazuk.png', 'Vegetable', 'Kg', 5),
    new Product(120, 1, 'Kiwi', '#855E24', '../assets/Images/Fruits/kiwi.png', 'Friut', 'Piece', 6),
    new Product(550, 1, 'Gazar', '#f86c1a', '../assets/Images/Vegetables/gazar.png', 'Vegetable', 'Kg', 7),
    new Product(300, 1, 'Pear', '#FFED6C', '../assets/Images/Fruits/tandz_dyushes.png', 'Friut', 'Kg', 8),
    new Product(1300, 1, 'Lolik', '#EA0303', '../assets/Images/Vegetables/lolik.png', 'Vegetable', 'Kg', 9),
    new Product(300, 1, 'Badrjan', '#0C0105', '../assets/Images/Vegetables/badrjan.png', 'Vegetable', 'Piece', 10),
    new Product(150, 1, 'Boxk', '#EA0131', '../assets/Images/Vegetables/karmir_boxk.png', 'Vegetable', 'Kg', 11),
    new Product(3100, 1, 'Sxtor', '#CBC5C1', '../assets/Images/Vegetables/sxtor.png', 'Vegetable', 'Kg', 12),
    new Product(250, 1, 'Kartol', '#fcdf98', '../assets/Images/Vegetables/kartol.png', 'Vegetable', 'Kg', 13),
    new Product(2500, 1, 'Ddum', '#F7944B', '../assets/Images/Vegetables/ddum.png', 'Vegetable', 'Piece', 14),
    new Product(300, 1, 'Kartol', '#DC9B6B', '../assets/Images/Vegetables/karmir_kartol.png', 'Vegetable', 'Kg', 15),
    new Product(550, 1, 'Banana', '#DBBC37', '../assets/Images/Fruits/banana.png', 'Friut', 'Kg', 16),
    new Product(1850, 1, 'Cherry Lolik', '#E74003', '../assets/Images/Vegetables/chery_lolik.png', 'Vegetable', 'Kg', 17),
    new Product(800, 1, 'Orange', '#FA9111', '../assets/Images/Fruits/orange.png', 'Friut', 'Kg', 18),
    new Product(100, 1, 'Bibar', '#BD0506', '../assets/Images/Vegetables/karmir_bibar.png', 'Vegetable', 'Piece', 19),
    new Product(2500, 1, 'Pinnapple', '#D7B748', '../assets/Images/Fruits/pinnapple.png', 'Friut', 'Piece', 20),
    new Product(900, 1, 'Xiyar', '#79A34E', '../assets/Images/Vegetables/varung.png', 'Vegetable', 'Kg', 21),
    new Product(300, 1, 'Pear', '#CBCF71', '../assets/Images/Fruits/tandz_dzmer.png', 'Friut', 'Kg', 22),
    new Product(200, 1, 'Sox', '#A53245', '../assets/Images/Vegetables/karmir_sox.png', 'Vegetable', 'Kg', 23),
    new Product(180, 1, 'Boxk', '#D9CC94', '../assets/Images/Vegetables/spitak_boxk.png', 'Vegetable', 'Kg', 24),
    new Product(200, 1, 'Sox', '#DB7E49', '../assets/Images/Vegetables/sox.png', 'Vegetable', 'Kg', 25),
    new Product(2500, 1, 'Pork', '', '../assets/Images/deafult.jpg', 'Meat', 'Kg', 26),
  ];
  
  getProductByID(id){
    let temp;
    this.mainArr.map((item)=>{
      if(item.id == id){
        temp=item;
        return;
      }
    });
    return temp;
  }

  public weightMinus(a) {
    if (a.weight <= 0) return;
    
    if(a.countMethod == 'Piece') {
      a.weight -= 1
    } else {
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


  constructor() { }

}
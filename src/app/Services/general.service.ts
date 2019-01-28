import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public productsArr: Array<any> = [
    new Product(500, 1, 'Nur', '#DB232E', '../assets/Images/Fruits/nur.png', 'Friut', 'Piece'),
    new Product(300, 1, 'Sergevil', '#FED403', '../assets/Images/Fruits/serkevil.png', 'Friut', 'Kg'),
    new Product(300, 1, 'Bazuk', '#8E1324', '../assets/Images/Vegetables/bazuk.png', 'Vegetable', 'Kg'),
    new Product(1300, 1, 'Lolik', '#EA0303', '../assets/Images/Vegetables/lolik.png', 'Vegetable', 'Kg'),
    new Product(300, 1, 'Badrjan', '#0C0105', '../assets/Images/Vegetables/badrjan.png', 'Vegetable', 'Piece'),
    new Product(150, 1, 'Boxk', '#EA0131', '../assets/Images/Vegetables/karmir_boxk.png', 'Vegetable', 'Kg'),
    new Product(250, 1, 'Apple', '#72010F', '../assets/Images/Fruits/apple.png', 'Friut', 'Kg'),
    new Product(3100, 1, 'Sxtor', '#CBC5C1', '../assets/Images/Vegetables/sxtor.png', 'Vegetable', 'Kg'),
    new Product(550, 1, 'Gazar', '#f86c1a', '../assets/Images/Vegetables/gazar.png', 'Vegetable', 'Kg'),
    new Product(250, 1, 'Kartol', '#fcdf98', '../assets/Images/Vegetables/kartol.png', 'Vegetable', 'Kg'),
    new Product(120, 1, 'Kiwi', '#855E24', '../assets/Images/Fruits/kiwi.png', 'Friut', 'Piece'),
    new Product(300, 1, 'Kartol', '#DC9B6B', '../assets/Images/Vegetables/karmir_kartol.png', 'Vegetable', 'Kg'),
    new Product(1850, 1, 'Cherry Lolik', '#E74003', '../assets/Images/Vegetables/chery_lolik.png', 'Vegetable', 'Kg'),
    new Product(300, 1, 'Pear', '#FFED6C', '../assets/Images/Fruits/tandz_dyushes.png', 'Friut', 'Kg'),
    new Product(550, 1, 'Banana', '#DBBC37', '../assets/Images/Fruits/banana.png', 'Friut', 'Kg'),
    new Product(2500, 1, 'Ddum', '#F7944B', '../assets/Images/Vegetables/ddum.png', 'Vegetable', 'Piece'),
    new Product(800, 1, 'Orange', '#FA9111', '../assets/Images/Fruits/orange.png', 'Friut', 'Kg'),
    new Product(2500, 1, 'Pinnapple', '#D7B748', '../assets/Images/Fruits/pinnapple.png', 'Friut', 'Piece'),
    new Product(300, 1, 'Pear', '#CBCF71', '../assets/Images/Fruits/tandz_dzmer.png', 'Friut', 'Kg'),
    new Product(100, 1, 'Bibar', '#BD0506', '../assets/Images/Vegetables/karmir_bibar.png', 'Vegetable', 'Piece'),
    new Product(150, 1, 'Cicak', '#578812',  '../assets/Images/Vegetables/kcu_bibar.png', 'Vegetable', 'Piece'),
    new Product(900, 1, 'Xiyar', '#79A34E', '../assets/Images/Vegetables/varung.png', 'Vegetable', 'Kg'),
    new Product(200, 1, 'Sox', '#A53245', '../assets/Images/Vegetables/karmir_sox.png', 'Vegetable', 'Kg'),
    new Product(200, 1, 'Sox', '#DB7E49', '../assets/Images/Vegetables/sox.png', 'Vegetable', 'Kg'),
    new Product(180, 1, 'Boxk', '#D9CC94', '../assets/Images/Vegetables/spitak_boxk.png', 'Vegetable', 'Kg'),
  ];
  



  constructor() { }
  
}

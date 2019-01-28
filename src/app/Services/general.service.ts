import { Injectable } from '@angular/core';
import { Mirg } from '../Models/Fruit';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  public fruitsArray: Array<any> = [
    new Mirg('Banana', 550, 1,'../assets/Images/Fruits/pinaple.jpg'),
    new Mirg('Pinnapple', 2500, 1, '../assets/Images/Fruits/pinaple.jpg'),
    new Mirg('Tandz', 300, 1, '../assets/Images/Fruits/pinaple.jpg'),
    new Mirg('Xndzor', 250, 1, '../assets/Images/Fruits/pinaple.jpg'),
    new Mirg('Mandarin', 300, 1, '../assets/Images/Fruits/pinaple.jpg')
  ];
  



  constructor() { }
  
}

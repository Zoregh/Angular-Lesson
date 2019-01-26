import { Component, OnInit } from '@angular/core';
import { Mirg } from 'src/app/Models/Fruit';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruitsArray: Array<any> = [new Mirg('Banana', 550, 1,'../assets/pinaple.jpg'),
                      new Mirg('Pinnapple', 2500, 1, '../assets/pinaple.jpg'),
                      new Mirg('Tandz', 300, 1, '../assets/pinaple.jpg'),
                      new Mirg('Xndzor', 250, 1, '../assets/pinaple.jpg'),
                      new Mirg('Mandarin', 300, 1, '../assets/pinaple.jpg')
                    ];

  constructor() { }

  ngOnInit() {
  }
  

}

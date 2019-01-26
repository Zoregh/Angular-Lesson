import { Component } from '@angular/core';
import { Mirg } from './Models/Fruit';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Homework2';
  mrger: Array<any> = [new Mirg('Banana', 550, 1,'../assets/pinaple.jpg'),
                      new Mirg('Pinnapple', 2500, 1, '../assets/pinaple.jpg'),
                      new Mirg('Tandz', 300, 1, '../assets/pinaple.jpg'),
                      new Mirg('Xndzor', 250, 1, '../assets/pinaple.jpg'),
                      new Mirg('Mandarin', 300, 1, '../assets/pinaple.jpg')
                    ];
}

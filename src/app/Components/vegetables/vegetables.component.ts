import { Component, OnInit } from '@angular/core';
import { Vegetable } from 'src/app/Models/Vegetable';
import { GeneralService } from '../../Services/general.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  vegetablesArray: Array<any> = [
    new Vegetable('Lolik', 1300, 1, '#EA0303', 'Kg', '../assets/Images/Vegetables/lolik.png'),
    new Vegetable('Badrjan', 100, 1, '#0C0105', 'Kg', '../assets/Images/Vegetables/badrjan.png'),
    new Vegetable('Boxk', 150, 1, '#EA0131', 'Kg', '../assets/Images/Vegetables/karmir_boxk.png'),
    new Vegetable('Sxtor', 3100, 1, '#CBC5C1', 'Kg', '../assets/Images/Vegetables/sxtor.png'),
    new Vegetable('Gazar', 550, 1, '#f86c1a', 'Kg', '../assets/Images/Vegetables/gazar.png'),
    new Vegetable('Bazuk', 300, 1, '#8E1324', 'Kg', '../assets/Images/Vegetables/bazuk.png'),
    new Vegetable('Kartol', 250, 1, '#fcdf98', 'Kg', '../assets/Images/Vegetables/kartol.png'),
    new Vegetable('Kartol', 300, 1, '#DC9B6B', 'Kg', '../assets/Images/Vegetables/karmir_kartol.png'),
    new Vegetable('Cherry Lolik', 1850, 1, '#E74003', 'Kg', '../assets/Images/Vegetables/chery_lolik.png'),
    new Vegetable('Ddum', 2500, 1, '#F7944B', 'piece', '../assets/Images/Vegetables/ddum.png'),
    new Vegetable('Bibar', 700, 1, '#BD0506', 'Kg', '../assets/Images/Vegetables/karmir_bibar.png'),
    new Vegetable('Cicak', 100, 1, '#578812', 'piece', '../assets/Images/Vegetables/kcu_bibar.png'),
    new Vegetable('Xiyar', 900, 1, '#79A34E', 'Kg', '../assets/Images/Vegetables/varung.png'),
    new Vegetable('Sox', 200, 1, '#A53245', 'Kg', '../assets/Images/Vegetables/karmir_sox.png'),
    new Vegetable('Sox', 200, 1, '#DB7E49', 'Kg', '../assets/Images/Vegetables/sox.png'),
    new Vegetable('Boxk', 180, 1, '#D9CC94', 'Kg', '../assets/Images/Vegetables/spitak_boxk.png'),
  ];

  constructor(private myService:GeneralService) { }

  ngOnInit() {
    console.log(this.myService.username = 'Vke');
  }

}

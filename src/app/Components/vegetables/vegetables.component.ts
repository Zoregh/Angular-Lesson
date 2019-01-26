import { Component, OnInit } from '@angular/core';
import { Vegetable } from 'src/app/Models/Vegetable'

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  vegetablesArray: Array<any> = [
    new Vegetable('Badrjan', 100, 1, 'Black', 'Kg', '../assets/Images/Vegetables/badrjan.png'),
    new Vegetable('Bazuk', 300, 1, 'Red', 'Kg', '../assets/Images/Vegetables/bazuk.png'),
    new Vegetable('Cherry Lolik', 1850, 1, 'Red', 'Kg', '../assets/Images/Vegetables/chery_lolik.png'),
    new Vegetable('Ddum', 2500, 1, 'Yellow', 'piece', '../assets/Images/Vegetables/ddum.png'),
    new Vegetable('Gazar', 550, 1, 'Yellow', 'Kg', '../assets/Images/Vegetables/gazar.png'),
    new Vegetable('Bibar', 700, 1, 'Red', 'Kg', '../assets/Images/Vegetables/karmir_bibar.png'),
    new Vegetable('Boxk', 150, 1, 'Red', 'Kg', '../assets/Images/Vegetables/karmir_boxk.png'),
    new Vegetable('Kartol', 300, 1, 'Red', 'Kg', '../assets/Images/Vegetables/karmir_kartol.png'),
    new Vegetable('Sox', 200, 1, 'Red', 'Kg', '../assets/Images/Vegetables/karmir_sox.png'),
    new Vegetable('Kartol', 250, 1, 'White', 'Kg', '../assets/Images/Vegetables/kartol.png'),
    new Vegetable('Cicak', 100, 1, 'Green', 'piece', '../assets/Images/Vegetables/kcu_bibar.png'),
    new Vegetable('Lolik', 1300, 1, 'Red', 'Kg', '../assets/Images/Vegetables/lolik.png'),
    new Vegetable('Bibar', 700, 1, 'Multicolor', 'Kg', '../assets/Images/Vegetables/qaxcr_bibar.png'),
    new Vegetable('Sox', 200, 1, 'White', 'Kg', '../assets/Images/Vegetables/sox.png'),
    new Vegetable('Boxk', 180, 1, 'White', 'Kg', '../assets/Images/Vegetables/spitak_boxk.png'),
    new Vegetable('Sxtor', 3100, 1, 'White', 'Kg', '../assets/Images/Vegetables/sxtor.png'),
    new Vegetable('Xiyar', 900, 1, 'Green', 'Kg', '../assets/Images/Vegetables/varung.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}

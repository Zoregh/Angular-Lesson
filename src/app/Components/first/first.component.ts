import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/newUser';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public user: User = new User;

  constructor() { }

  ngOnInit() {
  }

}



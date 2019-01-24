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
    this.user.name = 'anun';
    this.user.lastname = '';
    this.user.email = '';
    this.user.password = 0;
    this.user.address = '';
    this.user.city = '';
    this.user.zip = '';
    console.log(this.user.name);
  }

}



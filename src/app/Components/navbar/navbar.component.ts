import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../Services/general.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pruductService:GeneralService) { }

  ngOnInit() {
  }

}

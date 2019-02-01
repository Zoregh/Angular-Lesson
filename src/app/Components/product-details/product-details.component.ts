import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from './../../Services/general.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public currentObject: any;
  
  constructor(private router: Router, private activeRoute: ActivatedRoute, private myserv:GeneralService) { }

  public id: number;

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.currentObject = this.myserv.getProductByID(this.id);
    });
  }

}

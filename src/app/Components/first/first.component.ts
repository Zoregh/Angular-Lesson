import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  public user: User = new User();
  public showHide:boolean = true;
  public users: Array<User> = [];
  public regions: Array<string> = ['Արագածոտն', 'Արարատ', 'Արմաւիր', 'Գեղարքունիք', 'Լոռի', 'Կոտայք', 'Շիրակ', 'Սիւնիք', 'Վայոց ձոր', 'Տաւուշ'];
  public freshvVew(){
    this.showHide = !this.showHide;
  }

  constructor() { }

  ngOnInit() {
  }
  submit(MyForm){
    this.user.name = MyForm.name.value;
    this.user.lastname = MyForm.lastname.value;
    this.user.email = MyForm.email.value;
    this.user.password = MyForm.password.value;
    this.user.region = MyForm.region.value;
    this.user.city = MyForm.city.value;
    this.user.address = MyForm.address.value;
    this.user.zip = MyForm.zip.value;

    if(this.user.checkFields()) {
      this.users.push(this.user);
      this.freshvVew();
    } else {
      alert("Please, fill all fields.");
    }
    
  }

}



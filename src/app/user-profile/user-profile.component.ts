import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user = {
    name : 'Wayne',
    firstName : 'Bruce',
    age : 42,
    quote : "",
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  toDisplay = true;
  
  toggleData() {
    this.toDisplay = !this.toDisplay;
  }
}

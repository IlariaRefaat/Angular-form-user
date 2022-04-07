import { Component } from '@angular/core';
import { User } from 'src/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
  users: User[] = []
  updateUsers(user: User): void {
    this.users.push(user)
    console.log(user)
  }
}


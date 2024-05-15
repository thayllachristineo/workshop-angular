import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserService } from './shared/user.service';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}

  // ngOnInit() {
  //   this.userService.getUsers().subscribe((data) => console.log(data));
  // }
}

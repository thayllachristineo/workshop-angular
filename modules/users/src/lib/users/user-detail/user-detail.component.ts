import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';

import { UserService } from '../shared/user.service';
import { getParamsId } from './get-params-id';

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  private userService = inject(UserService);
  user$ = getParamsId().pipe(
    switchMap((id) => this.userService.getUserById(id))
  );
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: string) {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}

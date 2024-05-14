import { Routes } from '@angular/router';

/* loadComponent: loads the component with lazy loading */

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(
        (component) => component.HomeComponent
      ),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./users/users.component').then(
        (component) => component.UsersComponent
      ),
  },
];

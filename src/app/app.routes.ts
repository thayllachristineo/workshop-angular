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
      import('home').then((component) => component.HomeComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('users').then((component) => component.UsersComponent),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('users').then((component) => component.UserDetailComponent),
      },
    ],
  },
];

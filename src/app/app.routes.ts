import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ui/pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./ui/pages/about/about.component').then((c) => c.AboutComponent),
  },
];

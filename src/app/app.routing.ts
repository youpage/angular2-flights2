import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: 'app/home/index' },
  { path: 'flights', loadChildren: 'app/flights/index' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

export const AppRouting = RouterModule.forRoot(app_routes);

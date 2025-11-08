import { Routes } from '@angular/router';
import { Calculate } from './calculate/calculate';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  {
    path: '',
    component: Calculate
  },
  {
    path: '**',
    component: Notfound
  }
];

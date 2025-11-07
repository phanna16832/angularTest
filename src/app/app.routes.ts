import { Routes } from '@angular/router';
import { App } from './app';
import { Calculate } from './calculate/calculate';
import { Notfound } from './notfound/notfound';


export const routes: Routes = [
    {
        path: '',
        component: App
    },
    {
        path: 'calculate',
        component: Calculate
    },

    //notfound
    {
        path:'**',
        component: Notfound
    }
];

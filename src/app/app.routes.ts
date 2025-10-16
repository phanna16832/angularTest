import { Routes } from '@angular/router';
import { Aboutus } from './pages/aboutus/aboutus';
import { App } from './app';

export const routes: Routes = [
    {path: 'aboutus',
        component: Aboutus
    },
    {
        path: 'home',
        component: App
    }
];

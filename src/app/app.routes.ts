import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';
import { Settings } from './settings/settings';
import { Greeting } from './greeting/greeting';

export const routes: Routes = [
    { path: '', redirectTo:'home' , pathMatch: 'full' },
    { path: 'home', component: Home},
    { path: 'about', component: About},
    { path: 'dashboard', component: Dashboard, children: [
        { path: 'profile', component: Profile },
        { path: 'settings', component: Settings },
    ]},
    { path: 'greeting/:name', component: Greeting }

];

import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';
import { Settings } from './settings/settings';
import { Greeting } from './greeting/greeting';
import { QueryFragment } from './query-fragment/query-fragment';
import { Login } from './login/login';
import { Personal } from './personal/personal';
import { authGuard } from './auth-guard';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    { path: '', redirectTo:'home' , pathMatch: 'full' },
    { path: 'home', component: Home},
    { path: 'about', component: About},
    { path: 'dashboard', component: Dashboard, children: [
        { path: 'profile', component: Profile },
        { path: 'settings', component: Settings },
    ]},
    { path: 'greeting/:name', component: Greeting },
    {path: 'query-fragment', component: QueryFragment},
    { path: 'page-not-found', component: PageNotFound},
    {path: 'login', component: Login},
    {path: 'personal', component: Personal, canActivate:[authGuard]}

];

import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Wishlist } from './components/wishlist/wishlist';
import { Search } from './components/search/search';
import { MovieDetails } from './components/movie-details/movie-details';
import { AccountDetails } from './components/account-details/account-details';
import { NotFound } from './components/not-found/not-found';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path:'wishlist',component:Wishlist},
    {path:'search',component:Search},
    {path:'movie/:id',component:MovieDetails},
    {path:'account',component:AccountDetails},
    {path:'**',component:NotFound}



];

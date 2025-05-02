import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RideComponent } from './ride/ride.component';
import { AddRideComponent } from './add-ride/add-ride.component';
import { RequestComponent } from './request/request.component';
import { LoginComponent } from './login/login.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ride',
    component: RideComponent,
  },
  {
    path: 'add-ride',
    component: AddRideComponent,
  },
  {
    path: 'request',
    component: RequestComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  }
];

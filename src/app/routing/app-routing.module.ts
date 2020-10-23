import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { HomeComponent } from '../components/common/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../components/dashboard-mod/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('../components/event-mod/event.module').then((m) => m.EventModule),
  },
  {
    path: 'volunteers',
    loadChildren: () =>
      import('../components/volunteer-mod/volunteer.module').then(
        (m) => m.VolunteerModule
      ),
  },
  {
    path: 'family-id',
    loadChildren: () =>
      import('../components/family-id-mod/family-id.module').then(
        (m) => m.FamilyIdModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  }, {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }, {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },

  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  // { path: '', component: SecureComponent, canActivate: [IsLoggedInGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES },
  // { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { IsLoggedInGuard } from '@app/core/guards/is-logged-in.guard';
import { DashboardComponent } from '@app/features/dashboard/components/dashboard/dashboard.component';

export const SECURE_ROUTES: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [IsLoggedInGuard],
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
];

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/features/login/components/login/login.component';

export const PUBLIC_ROUTES: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full',
        loadChildren: './login/login.module#LoginModule'
    }, {
        path: 'login', component: LoginComponent,
        loadChildren: './login/login.module#LoginModule'
    },
];

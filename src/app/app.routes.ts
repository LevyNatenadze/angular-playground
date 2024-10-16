import { Routes } from '@angular/router';
import { SidenavLayoutComponent } from './shared/components/sidenav-layout/sidenav-layout.component';
import { DashboardRoute } from './features/dashboard/routes';
import { HomeRoutes } from './features/home/routes';
import { settingsRoutes } from './features/settings/routes';

export const routes: Routes = [
    {
        path: '',
        title: 'მთავარი',
        component: SidenavLayoutComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {
                path: 'home', 
                children: HomeRoutes
            },
            {
                path: 'dashboard', 
                children: DashboardRoute
            },
            {
                path: 'settings',
                children: settingsRoutes
            }
        ]
    }
];

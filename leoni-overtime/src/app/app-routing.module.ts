import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { AppLayoutComponent } from './shared/ui/layouts/app-layout/app-layout.component';
import { LoginLayoutComponent } from './shared/ui/layouts/login-layout/login-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
        title: 'Dashboard',
        canActivate: [AuthGuard]
      },
      {
        path: 'new-request',
        loadChildren: () => import('./new-request/new-request.module').then( m => m.NewRequestPageModule),
        title: 'New Request',
        canActivate: [AuthGuard],
      },
      {
        path: 'my-requests/pending',
        loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule),
        title: 'My Requests/Pending',
        canActivate: [AuthGuard],
      },
      {
        path: 'approvals',
        loadChildren: () => import('./approvals/approvals.module').then( m => m.ApprovalsPageModule),
        title: 'Approvals',
        canActivate: [AuthGuard],
      },
      {
        path: 'my-requests/overview',
        loadChildren: () => import('./reports/my-requests/my-requests.module').then( m => m.MyRequestsPageModule),
        title: 'My Requests/Overview',
        canActivate: [AuthGuard],
      },
      {
        path: 'reports/departments',
        loadChildren: () => import('./reports/departments/departments.module').then( m => m.DepartmentsPageModule),
        title: 'Reports/Departments',
        canActivate: [AuthGuard],
      },
      {
        path: 'reports/organizations',
        loadChildren: () => import('./reports/organizations/organizations.module').then( m => m.OrganizationsPageModule),
        title: 'Reports/Organizations',
        canActivate: [AuthGuard],
      },
      {
        path: 'reports/projects',
        loadChildren: () => import('./reports/projects/projects.module').then( m => m.ProjectsPageModule),
        title: 'Reports/Projects',
        canActivate: [AuthGuard],
      },
      {
        path: 'statistics/organizations',
        loadChildren: () => import('./statistics/organizations/organizations.module').then( m => m.OrganizationsPageModule),
        title: 'Statistics/Organizations',
        canActivate: [AuthGuard],
      },
      {
        path: 'statistics/departments',
        loadChildren: () => import('./statistics/departments/departments.module').then( m => m.DepartmentsPageModule),
        title: 'Statistics/Departments',
        canActivate: [AuthGuard],
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule),
        title: 'Login',
        canActivate: [LoginGuard]
      }
    ]
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./shared/ui/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule),
    title: '404-Page not found'
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

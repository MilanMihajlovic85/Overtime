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
        redirectTo: 'requests',
        pathMatch: 'full'
      },
      {
        path: 'requests',
        loadChildren: () => import('./requests/requests.module').then( m => m.RequestsPageModule),
        title: 'Requests',
        canActivate: [AuthGuard],
      },
      {
        path: 'approvals',
        loadChildren: () => import('./approvals/approvals.module').then( m => m.ApprovalsPageModule),
        title: 'Approvals',
        canActivate: [AuthGuard],
      },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule),
        title: 'Prijava',
        canActivate: [LoginGuard]
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

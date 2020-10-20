import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'admin-principal',
    loadChildren: () => import('./pages/admin-principal/admin-principal.module').then( m => m.AdminPrincipalPageModule)
  }, 
  {
    path: 'admin-eliminar',
    loadChildren: () => import('./pages/admin-eliminar/admin-eliminar.module').then( m => m.AdminEliminarPageModule)
  },
  {
    path: 'admin-ver',
    loadChildren: () => import('./pages/admin-ver/admin-ver.module').then( m => m.AdminVerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
  {
    path: 'paciente-principal',
    loadChildren: () => import('./pages/paciente-principal/paciente-principal.module').then( m => m.PacientePrincipalPageModule)
  },
  {
    path: 'doctor-principal',
    loadChildren: () => import('./pages/doctor-principal/doctor-principal.module').then( m => m.DoctorPrincipalPageModule)
  },
  {
    path: 'admin-noticia',
    loadChildren: () => import('./pages/admin-noticia/admin-noticia.module').then( m => m.AdminNoticiaPageModule)
  },
  {
    path: 'ver-noticias-paciente',
    loadChildren: () => import('./pages/ver-noticias-paciente/ver-noticias-paciente.module').then( m => m.VerNoticiasPacientePageModule)
  },
  {
    path: 'ver-noticias-doctor',
    loadChildren: () => import('./pages/ver-noticias-doctor/ver-noticias-doctor.module').then( m => m.VerNoticiasDoctorPageModule)
  },
  {
    path: 'doctor-crear-cita',
    loadChildren: () => import('./pages/doctor-crear-cita/doctor-crear-cita.module').then( m => m.DoctorCrearCitaPageModule)
  },
  {
    path: 'doctor-historial',
    loadChildren: () => import('./pages/doctor-historial/doctor-historial.module').then( m => m.DoctorHistorialPageModule)
  },
  {
    path: 'doctor-creacion-cita',
    loadChildren: () => import('./pages/doctor-creacion-cita/doctor-creacion-cita.module').then( m => m.DoctorCreacionCitaPageModule)
  },
  {
    path: 'doctor-creacion-tratamiento',
    loadChildren: () => import('./pages/doctor-creacion-tratamiento/doctor-creacion-tratamiento.module').then( m => m.DoctorCreacionTratamientoPageModule)
  },
  {
    path: 'doctor-vista-historial',
    loadChildren: () => import('./pages/doctor-vista-historial/doctor-vista-historial.module').then( m => m.DoctorVistaHistorialPageModule)
  },
  {
    path: 'paciente-historial',
    loadChildren: () => import('./pages/paciente-historial/paciente-historial.module').then( m => m.PacienteHistorialPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

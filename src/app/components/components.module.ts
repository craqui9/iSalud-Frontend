import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';



@NgModule({
  declarations: [
    MenuAdminComponent
  ],
  exports: [
    MenuAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }

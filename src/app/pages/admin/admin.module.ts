import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ModalFormularioComponent } from './categorias/modal-formulario/modal-formulario.component';
import { MaterialModule } from 'src/app/material.modules';


@NgModule({
  declarations: [
    AdminComponent,
    ModalFormularioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
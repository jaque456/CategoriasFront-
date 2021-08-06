import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { ModalFormularioComponent } from './modal-formulario/modal-formulario.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    ModalFormularioComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }

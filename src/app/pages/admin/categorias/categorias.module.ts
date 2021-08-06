import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasComponent } from './categorias.component';
import { MaterialModule } from 'src/app/material.modules';
import { CategoriasRoutingModule } from './categorias-routing.module';

@NgModule({
  declarations: [
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    MaterialModule
  ]
})
export class MascotasModule { }
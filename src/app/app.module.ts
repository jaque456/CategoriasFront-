import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { verCategoriesComponent } from './verCategorias/verCategories.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    verCategoriesComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],

  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [],
  bootstrap: [AppComponent
  ],


})
export class AppModule { }

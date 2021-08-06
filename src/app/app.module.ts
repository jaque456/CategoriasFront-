import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { MaterialModule } from './material.modules';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UtilsService } from './shared/services/util.service';
import { AdminInterceptor } from './shared/interceptors/admin-interceptor';
=======
import { CategoriesComponent } from './categories/categories.component';
import { verCategoriesComponent } from './verCategorias/verCategories.component';

>>>>>>> 14ca033895ba6a5984a5d37d1e7becd4bf150a76

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    FooterComponent,
    LoadingComponent
=======
    CategoriesComponent,
    verCategoriesComponent
  
>>>>>>> 14ca033895ba6a5984a5d37d1e7becd4bf150a76
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    HttpClientModule
  ],
  providers: [
    UtilsService,
    { provide: HTTP_INTERCEPTORS, useClass: AdminInterceptor, multi: true }
  ],
  
  bootstrap: [AppComponent]
=======
    FormsModule,

  ],

  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [],
  bootstrap: [AppComponent
  ],


>>>>>>> 14ca033895ba6a5984a5d37d1e7becd4bf150a76
})
export class AppModule { }
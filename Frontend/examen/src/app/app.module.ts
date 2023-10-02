import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CanActivateFn } from '@angular/router';

import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
import { HelpsComponent } from './components/helps/helps.component';
import { InfoComponent } from './components/info/info.component';
import { MensajeComponent } from './components/mensaje/mensaje.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ResumenComponent,
    InscripcionComponent,
    NewAdminComponent,
    HelpsComponent,
    InfoComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

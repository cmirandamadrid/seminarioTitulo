import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminComponent } from "./components/admin/admin.component";
import { ResumenComponent } from "./components/resumen/resumen.component";
import { InscripcionComponent } from "./components/inscripcion/inscripcion.component";
import { IsUserGuard } from "./guards/user.guard";
import { NewAdminComponent } from "./components/new-admin/new-admin.component";
import { HelpsComponent } from "./components/helps/helps.component";
import { InfoComponent } from "./components/info/info.component";
import { MensajeComponent } from "./components/mensaje/mensaje.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [IsUserGuard] },
    { path: 'resumen', component: ResumenComponent },
    { path: 'inscripcion', component: InscripcionComponent },
    { path: 'new-admin', component: NewAdminComponent },
    { path: 'helps', component: HelpsComponent },
    { path: 'info', component: InfoComponent },
    { path: 'mensaje', component: MensajeComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
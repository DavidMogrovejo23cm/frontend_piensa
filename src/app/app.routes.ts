import { Routes } from '@angular/router';
import { IntComponent } from './int/int.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QRComponent } from './home/qr/qr.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { HorasComponent } from './horas/horas.component';
import { MenuComponent } from './menu/menu.component';


export const routes: Routes = [
    {path:"", component: IntComponent},
    {path:"Login", component: LoginComponent},
    {path:"home", component: HomeComponent},
    {path:"QR", component: QRComponent},
    {path:"Finanzas", component: FinanzasComponent},
    {path:"horas", component:HorasComponent},
    {path:"menu", component:MenuComponent}
];

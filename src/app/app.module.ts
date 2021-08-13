import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { IonicModule } from '@ionic/angular';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';
import { BusquedaMenuComponent } from './components/busqueda-menu/busqueda-menu.component';
import { NavbarUsuarioComponent } from './components/navbar-usuario/navbar-usuario.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    BusquedaMenuComponent,
    NavbarUsuarioComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-menu',
  templateUrl: './busqueda-menu.component.html',
  styleUrls: ['./busqueda-menu.component.css']
})
export class BusquedaMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  precio = '';
  totalPago = 'Q' + 0.00;
  cantidadArticulos = 0;

  //Cambiar Cantidad De Articulos
  actCantidad({event}: { event: any }){
    if (event.target.value == ''){
      this.cantidadArticulos = 0;
    }else{
      this.cantidadArticulos = event.target.value;
    }
  }
}

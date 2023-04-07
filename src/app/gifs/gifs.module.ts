import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GiftsPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports:[
    GiftsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }

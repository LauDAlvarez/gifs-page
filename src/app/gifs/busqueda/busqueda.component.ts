import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  @ViewChild('txtEnter') txtEnter!: ElementRef<HTMLInputElement>;
  
  constructor( private giftService: GifsService){}

  buscar(){
    const valor = this.txtEnter.nativeElement.value
    if(valor.trim().length != 0)
    this.giftService.buscarGifs( valor )
    
    this.txtEnter.nativeElement.value = '';
  }
} 

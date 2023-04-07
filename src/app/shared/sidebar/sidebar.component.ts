import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get historial(){
    return [...this.giftService.historial]
  }
  constructor( private giftService: GifsService){
  }
  buscar( titutlo: string){
    this.giftService.buscarGifs(titutlo);
  }
}


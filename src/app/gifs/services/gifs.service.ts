import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

import { Gif, SearchGIFResponse } from '../interface/gifs.interface';



@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey     : string = 'cM2AuSlBx48ySG9XBlUR3tAbGvQsdiHz'
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial : string[] = [];

  public resultados  : Gif[] = []

  get historial(){
    return [...this._historial]
  }

  buscarGifs( query: string ){
    query = query.toLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial = this.historial.slice(0,4)
      this._historial.unshift(query);
      localStorage.setItem( 'historial' , JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set( 'api_key', this.apiKey )
      .set( 'limit', '12' )
      .set( 'q', query );

    this.http.get<SearchGIFResponse>( `${this.servicioUrl}/search`, {params} )
    .subscribe( (res) =>{
      console.log(res)
      this.resultados = res.data;
      localStorage.setItem('gifs', JSON.stringify(this.resultados))
    })

    console.log(this._historial)
  }

  constructor( private http: HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('gifs')!) || [];
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { nasaItem } from '../interfaces/nasa-response';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiGateway = environment.url;  
  constructor(private http: HttpClient) {}

  public getNasaValue(fecha: any) : Observable<nasaItem> {
    let params = {
        api_key: 'zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb',
        date: fecha
    }
    return this.http.get<nasaItem>(`${this.apiGateway}`,{params: params})
  }
  public getNasaDetalle( id: string ) {
    return this.http.get<nasaItem>(`${this.apiGateway}api_key=zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb&date=${ id }`)
  }

}

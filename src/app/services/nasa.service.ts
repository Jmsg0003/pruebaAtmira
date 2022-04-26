import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { nasaItem } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private apiGateway = environment.url;
  private API_KEY= 'zdUP8ElJv1cehFM0rsZVSQN7uBVxlDnu4diHlLSb';
  constructor(private http: HttpClient) {}

  public getNasaValue(fecha: string) : Observable<any> {
    /*https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-09-15 */
    return this.http.get(`${this.apiGateway}api_key=${this.API_KEY}&date=${fecha}`);
  }

}

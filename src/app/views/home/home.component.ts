import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/services/nasa.service';
import { nasaItem } from '../../interfaces/nasa-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hoy = Date.now();
  photos : nasaItem[] = [];
  numDay = 6;
  constructor ( private _nasaService: NasaService){ }

  ngOnInit(): void { 
    const fecha = new Date(this.hoy).toISOString().slice(0, 10);
    for (let i = 0; i < this.numDay; i++) {
      this.pushContentNasa(this.obtenerDias(this.hoy,-i));
    }
    //this.contentNasa = this.contentNasa.sort((a, b) => new Date(a.date).getDay() - new Date(b.date).getDay());
    console.log("contentNasa",this.photos );
  }

  pushContentNasa(fecha: string){
    this._nasaService.getNasaValue(fecha).subscribe( 
      (photo)=>{
        this.photos.push(photo);
      },
      (error)=>{
        console.log("error",error);
      }
    )
  }

  obtenerDias(fecha_select: number, dias:number){
    let fecha = new Date(fecha_select)
    fecha.setDate(fecha.getDate() + dias);
    return fecha.toISOString().slice(0, 10);
  }
}
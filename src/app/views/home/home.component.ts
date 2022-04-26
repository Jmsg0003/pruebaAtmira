import {
  Component,
  OnInit
} from '@angular/core';
import { NasaService } from '../../services/nasa.service';
import { nasaItem } from '../../interfaces/interfaces';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  hoy = Date.now();
  contentNasa : nasaItem[] = [];
  numDay = 6;
  constructor ( private _nasaService: NasaService){

    const fecha = new Date(this.hoy).toISOString().slice(0, 10);
    for (let i = 0; i < this.numDay; i++) {
      this.pushContentNasa(this.obtenerDias(this.hoy,-i));
    }
    //this.contentNasa = this.contentNasa.sort((a, b) => new Date(a.date).getDay() - new Date(b.date).getDay());
    console.log("contentNasa",this.contentNasa );
  }

  pushContentNasa(fecha: string){
    this._nasaService.getNasaValue(fecha).subscribe( 
      (data)=>{
        this.contentNasa.push(data);
      },
      (error)=>{
        console.log("error",error);
      }
    )
  }

  ngOnInit(): void { }

  obtenerDias(fecha_select: number, dias:number){
    let fecha = new Date(fecha_select)
    fecha.setDate(fecha.getDate() + dias);
    return fecha.toISOString().slice(0, 10);
  }
  daySelected(dia: any){
    console.log("daySelected",dia);
  }
/*   convertirFecha (fechaString:string): Date {
    var fechaSp = fechaString.split("-");
    var anio = new Date().getFullYear();
    if (fechaSp.length == 3) {
      anio = fechaSp[2];
    }
    var mes = fechaSp[1] - 1;
    var dia = fechaSp[0];
  
    return new Date(anio, mes, dia);
  } */
}

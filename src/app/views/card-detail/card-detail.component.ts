import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  public photo : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _nasaService: NasaService,
    private location: Location,
    private router: Router
  ) {}
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params;
    console.log("id",id);
    this._nasaService.getNasaDetalle(id['date']).subscribe(
        (data) => {
          if ( !data ) {
            this.router.navigateByUrl('/home');
            return;
          }
          this.photo = data;
        },
        (error) => {
          if ( error ) {
            this.router.navigateByUrl('/home');
            return;
          }
          console.log('error', error);
        }
      );
    }
    onRegresar() {
      this.location.back();
    }
}

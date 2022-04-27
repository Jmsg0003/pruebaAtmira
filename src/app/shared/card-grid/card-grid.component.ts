import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Router } from '@angular/router';
import { nasaItem } from '../../interfaces/nasa-response';
  @Component({
    selector: 'app-card-grid',
    templateUrl: './card-grid.component.html',
    styleUrls: ['./card-grid.component.css'],
  })
  export class CardGridComponent implements OnInit {
    @Input() photos: nasaItem[]= [];
    constructor( private router: Router ) { }
    ngOnInit(): void {}

    onPhotoClick( photo: nasaItem ) {
      this.router.navigate(['/nasa/detail/', photo.date ]);
    }
  }
  
import { nasaItem } from '../../../../interfaces/interfaces';
import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
  } from '@angular/core';
  @Component({
    selector: 'app-mini-card-detail',
    templateUrl: './mini-card-detail.component.html',
    styleUrls: ['./mini-card-detail.component.scss'],
  })
  export class MiniCardDetailComponent implements OnInit {
    @Input() public dato: any;
    @Output() selectedDay = new EventEmitter();
    ngOnInit(): void {}

    daySelected(dia:any){
      this.selectedDay.emit(dia);
    }
  }
  
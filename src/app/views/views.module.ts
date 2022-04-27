import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardDetailComponent } from './card-detail/card-detail.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    HomeComponent, 
    CardDetailComponent
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    RatingModule]
})
export class ViewsModule {}

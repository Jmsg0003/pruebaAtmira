import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    CardGridComponent, 
    NavbarComponent],
  imports: [ 
    CommonModule,
    RatingModule,
    RouterModule],
  exports: [
    CardGridComponent,
    NavbarComponent],
})
export class SharedModule {}

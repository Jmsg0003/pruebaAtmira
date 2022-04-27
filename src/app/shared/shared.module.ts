import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardGridComponent } from './card-grid/card-grid.component';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    CardGridComponent, 
    SpinnerComponent,
    NavbarComponent],
  imports: [ 
    CommonModule,
    RatingModule,
    RouterModule],
  exports: [
    CardGridComponent,
    SpinnerComponent, 
    NavbarComponent],
})
export class SharedModule {}

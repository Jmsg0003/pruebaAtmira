import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [SpinnerComponent,NavbarComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent, NavbarComponent],
})
export class SharedModule {}

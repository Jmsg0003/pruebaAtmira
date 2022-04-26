import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { MiniCardDetailComponent } from './components/mini-card-detail/mini-card-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, CardDetailComponent,MiniCardDetailComponent],
  imports: [CommonModule,  HttpClientModule, RouterModule.forChild(routes), SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}

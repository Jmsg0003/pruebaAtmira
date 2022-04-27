import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailComponent } from './views/card-detail/card-detail.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'nasa/detail/:date',
   component: CardDetailComponent
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

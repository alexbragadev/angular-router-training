import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'heroes',  component: HeroListComponent, data: { animation: 'heroes' } },
  { path: 'hero/:id', component: HeroDetailComponent, data: { animation: 'hero' } },
  // {
  //   path: 'crisis-center',
  //   component: CrisisCenterComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: CrisisListComponent,
  //       children: [
  //         {
  //           path: ':id',
  //           component: CrisisDetailComponent
  //         },
  //         {
  //           path: '',
  //           component: CrisisCenterHomeComponent
  //         }
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }
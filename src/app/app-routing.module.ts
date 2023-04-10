import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
     path: '',
     loadChildren: () => import('./modules/home.module').then(x => x.HomeModule)
   },
   {
     path: '**',
     redirectTo: '/'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admission'
  },
  {
    path: 'admission',
    loadChildren: () => import('./screens/admission/admission.module').then(m => m.AdmissionModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not found'
    }
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

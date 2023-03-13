import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { AdmissionComponent } from './admission.component';


const routes: Routes = [
  {
    path: 'admission',
    component: AdmissionComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdmissionRountingModule { }

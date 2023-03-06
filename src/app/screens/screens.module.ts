import { NgModule } from '@angular/core';
import { AdmissionModule } from './admission/admission.module';

const MODULES = [
  AdmissionModule
];

@NgModule({
  declarations: [],
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class ScreensModule { }

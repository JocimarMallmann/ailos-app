import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    IconsModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }

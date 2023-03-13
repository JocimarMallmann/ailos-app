import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundButtonComponent } from './round-button.component';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  imports: [
    CommonModule,
    IconsModule
  ],
  declarations: [
    RoundButtonComponent
  ],
  exports: [
    RoundButtonComponent
  ]
})
export class RoundButtonModule { }

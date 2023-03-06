import { NgModule } from '@angular/core';

// components
import { StepperModule } from './stepper/stepper.module';
import { InputTextModule } from './input-text/input-text.module';
import { ChipModule } from './chip/chip.module';
import { CardModule } from './card/card.module';
import { ButtonModule } from './button/button.module';
import { MessageModule } from './message/message.module';

const MODULES = [
  ButtonModule,
  CardModule,
  ChipModule,
  InputTextModule,
  StepperModule,
  MessageModule
]

@NgModule({
  declarations: [],
  imports: [
    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class ComponentsModule { }

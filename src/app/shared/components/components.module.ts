import { NgModule } from '@angular/core';

// components
import { StepperModule } from './stepper/stepper.module';
import { InputTextModule } from './input-text/input-text.module';
import { ChipModule } from './chip/chip.module';
import { CardModule } from './card/card.module';
import { ButtonModule } from './button/button.module';
import { RoundButtonModule } from './round-button/round-button.module';
import { MessageModule } from './message/message.module';
import { DataListModule } from './data-list/data-list.module';
import { NavListModule } from './nav-list/nav-list.module';

const MODULES = [
  ButtonModule,
  CardModule,
  ChipModule,
  InputTextModule,
  StepperModule,
  MessageModule,
  DataListModule,
  RoundButtonModule,
  NavListModule
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

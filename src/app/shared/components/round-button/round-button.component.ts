import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoundButton } from './round-button.interface';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent implements OnInit {

  @Input() public roundButton: RoundButton = {};

  @Output() public clickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  click(): void {
    this.clickEvent.emit();
  }

}

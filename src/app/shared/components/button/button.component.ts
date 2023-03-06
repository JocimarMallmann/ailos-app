import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public text: string = 'no text';
  @Input() public type: string = 'button';
  @Input() public icon: string = '';
  @Input() public loading = false;
  @Input() public disabled = false;

  @Output() public clickEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  buttonClickEvent(): void {
    if (this.disabled) {
      return;
    }
    this.clickEvent.emit();
  }

}

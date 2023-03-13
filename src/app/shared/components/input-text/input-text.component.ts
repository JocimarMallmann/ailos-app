import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => InputTextComponent),
}

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputTextComponent implements ControlValueAccessor {

  @Input() public label: string = '';
  @Input() public id: string = '';
  @Input() public type: string = 'text';
  @Input() public placeholder: string = '';
  @Input() public required = false;
  @Input() public isReadOnly = false;
  @Input() public control: any;

  private innerValue: any;

  public get value() {
    return this.innerValue;
  }

  public set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCb(value);
    }
  }

  constructor() { }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }




}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cooperative-search',
  templateUrl: './cooperative-search.component.html',
  styleUrls: ['./cooperative-search.component.scss']
})
export class CooperativeSearchComponent implements OnInit {

  public cooperativeSearchForm: FormGroup;

  public cpf: string = '';
  public loading = false;
  public disabledButton = false;

  @Output() public eventSearch = new EventEmitter<string>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cooperativeSearchForm = this.formBuilder.group({
      cpf: [
        '', [ Validators.required ]
      ]
    });
  }


  search(): void {
    this.loading = true;
    const values = this.cooperativeSearchForm.getRawValue();
    this.eventSearch.emit(values.cpf);
    this.loading = false;
  }
}

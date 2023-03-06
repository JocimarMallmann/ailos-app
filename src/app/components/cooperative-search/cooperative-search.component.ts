import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooperative-search',
  templateUrl: './cooperative-search.component.html',
  styleUrls: ['./cooperative-search.component.scss']
})
export class CooperativeSearchComponent implements OnInit {

  public cpf: string = '';
  public loading = false;
  public disabledButton = false;

  constructor() { }

  ngOnInit() {
  }


  search(): void {
    this.loading = true;
    console.log();
    console.log('search: ', this.cpf);
    this.loading = false;
  }
}

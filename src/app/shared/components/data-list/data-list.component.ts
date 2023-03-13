import { Component, Input, OnInit } from '@angular/core';
import { DataList } from './data-list.interface';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() list: DataList[] = [];
  @Input() spacingBetween: string = '16px';

  ngOnInit(): void { }

  spacingBetweenLIElement(index: number): string {
    if (index !== this.list.length-1) {
      return this.spacingBetween;
    }
    return '0px';
  }


}

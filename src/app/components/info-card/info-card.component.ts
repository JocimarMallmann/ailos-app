import { DataList } from 'src/app/shared/components/data-list/data-list.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() dataList: DataList[] = [];

  constructor() { }

  ngOnInit(): void { }


}

import { Component, Input, OnInit } from '@angular/core';
import { NavList } from './nav-list.interface';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {

  @Input() public itemsMenu: NavList[];
  @Input() public showLabel = false;

  constructor() { }

  ngOnInit() {
  }

}

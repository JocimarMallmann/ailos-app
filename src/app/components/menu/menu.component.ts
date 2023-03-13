import { NavList } from '../../shared/components/nav-list/nav-list.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public itemsMenu: NavList[] = [];
  public openMenu = false;

  constructor() { }

  ngOnInit() {
    this.mockMenu();
  }

  toggleMenu(): void {
    this.openMenu = !this.openMenu;
  }

  mockMenu(): void {
    this.itemsMenu = [
      {
        label: 'Item 1',
        iconPrefix: 'fas',
        iconName: 'search',
        iconColor: '#fff',
        iconSize: 'lg',
        routerLink: '',
      },
      {
        label: 'Item 1',
        iconPrefix: 'fas',
        iconName: 'star',
        iconColor: '#fff',
        iconSize: 'lg',
        routerLink: '',
      },
      {
        label: 'Item 1',
        iconPrefix: 'fas',
        iconName: 'comment-dots',
        iconColor: '#fff',
        iconSize: 'lg',
        routerLink: '',
      },
      {
        label: 'Item 1',
        iconPrefix: 'fas',
        iconName: 'sliders',
        iconColor: '#fff',
        iconSize: 'lg',
        routerLink: '',
      },
      {
        label: 'Item 1',
        iconPrefix: 'fas',
        iconName: 'building-columns',
        iconColor: '#fff',
        iconSize: 'lg',
        routerLink: '',
      }
    ];
  }

}

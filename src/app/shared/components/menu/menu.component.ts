import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  menuItems: MenubarModule[] = [];

  ngOnInit() {
    this.menuItems = [
      // {label: "New", icon: 'pi pi-fw pi-plus'},
      // {label: "Open", icon: 'pi pi-fw pi-download'},
      // {label: "Undo", icon: 'pi pi-fw pi--refresh'},

      // menu

      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop,',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: 'basics',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          }
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      }
    ];
  }

}

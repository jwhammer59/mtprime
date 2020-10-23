import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-desktop',
        routerLink: '/dashboard',
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Event Table',
            icon: 'pi pi-fw pi-table',
            routerLink: '/events',
          },
          {
            label: 'Add Event',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: '/events/add-event',
          },
        ],
      },
      {
        label: 'Volunteers',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Volunteer Table',
            icon: 'pi pi-fw pi-table',
            routerLink: '/volunteers',
          },
          {
            label: 'Add Volunteer',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: '/volunteers/add-volunteer',
          },
        ],
      },
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Family ID',
            icon: 'pi pi-fw pi-key',
            routerLink: '/family-id',
          },
        ],
      },
    ];
  }
}

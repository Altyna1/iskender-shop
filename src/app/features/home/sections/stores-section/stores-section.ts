import { Component } from '@angular/core';

@Component({
  selector: 'app-stores-section',
  standalone: true,
  imports: [],
  templateUrl: './stores-section.html',
  styleUrl: './stores-section.scss',
})
export class StoresSection {
  stores = [
    {
      name: 'Iskender Home',
      address: 'г. Бишкек, ул. Турусбекова 167',
      phone: '+996 500 345 345'
    },
    {
      name: 'Iskender Home',
      address: 'г. Бишкек, ул. Лермонтова 6',
      phone: '+996 500 345 345'
    },
    {
      name: 'Iskender Home',
      address: 'г. Бишкек, ул. Льва-Толстого 19',
      phone: '+996 500 345 345'
    }
  ];
}
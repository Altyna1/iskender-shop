import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [],
  templateUrl: './categories-section.html',
  styleUrl: './categories-section.scss',
})
export class CategoriesSection {

      categories = [
      {
        title: 'Душевые кабины',
        count: 1520,
        image: 'images/categories/dush.jpg'
      },
      {
        title: 'Ванны',
        count: 4500,
        image: 'images/categories/vanna.jpg'
      },
      {
        title: 'Смесители',
        count: 100,
        image: 'images/categories/smesitel.jpg'
      },
      {
        title: 'Раковины',
        count: 1252,
        image: 'images/categories/rakovina.jpg'
      },
      {
        title: 'Унитазы',
        count: 3000,
        image: 'images/categories/unitaz.jpg'
      },
      {
        title: 'Полотенцесушители',
        count: 3000,
        image: 'images/categories/polotence.jpg'
      }
    ];

}
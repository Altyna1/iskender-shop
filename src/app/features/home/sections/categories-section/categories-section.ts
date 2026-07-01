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
        image: 'images/Dushevie_kabini_68.jpg'
      },
      {
        title: 'Ванны',
        count: 4500,
        image: 'images/categories/bathtub.jpg'
      },
      {
        title: 'Смесители',
        count: 100,
        image: 'images/categories/faucet.jpg'
      },
      {
        title: 'Раковины',
        count: 1252,
        image: 'images/categories/sink.jpg'
      },
      {
        title: 'Унитазы',
        count: 3000,
        image: 'images/categories/toilet.png'
      },
      {
        title: 'Полотенцесушители',
        count: 350,
        image: 'images/news/news3.png'
      }
    ];

}
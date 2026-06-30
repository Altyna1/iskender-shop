import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [],
  templateUrl: './hero-slider.html',
  styleUrl: './hero-slider.scss',
})
export class HeroSlider {

  items = [

    {
      title: 'Скидки',
      image: 'images/menu/skidki.jpg'
    },

    {
      title: 'Акции',
      image: 'images/menu/akcii.jpg'
    },

    {
      title: 'Распродажа',
      image: 'images/menu/rasprodazha.jpg'
    },

    {
      title: 'Подарки',
      image: 'images/menu/podarki.jpg'
    },

    {
      title: 'Новинки',
      image: 'images/menu/novinki.jpg'
    },

    {
      title: 'Душевые',
      image: 'images/menu/dush.jpg'
    },

    {
      title: 'Ванны',
      image: 'images/menu/vanna.jpg'
    },

    {
      title: 'Смесители',
      image: 'images/menu/smesitel.jpg'
    }

  ];

}
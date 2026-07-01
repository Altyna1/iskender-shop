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
      image: 'images/news/news2.jpg'
    },

    {
      title: 'Акции',
      image: 'images/news/news1.jpg'
    },

    {
      title: 'Распродажа',
      image: 'images/categories/sink.jpg'
    },

    {
      title: 'Подарки',
      image: 'images/products/product1.jpg'
    },

    {
      title: 'Новинки',
      image: 'images/categories/tower-rail.png'
    },

    {
      title: 'Душевые',
      image: 'images/categories/shower.jpg'
    },

    {
      title: 'Ванны',
      image: 'images/categories/bathtub.jpg'
    },

    {
      title: 'Смесители',
      image: 'images/categories/faucet.jpg'
    }

  ];

}
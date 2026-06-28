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
    'Скидки',
    'Акции',
    'Распродажа',
    'Подарки',
    'Новинки',
    'Душевые',
    'Ванны',
    'Смесители',
  ];
}
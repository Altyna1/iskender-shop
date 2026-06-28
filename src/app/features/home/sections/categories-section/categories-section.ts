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
    'Душевые кабины',
    'Ванны',
    'Смесители',
    'Раковины',
    'Унитазы',
    'Полотенцесушители'
  ];
}
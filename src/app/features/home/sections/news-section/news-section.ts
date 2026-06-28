import { Component } from '@angular/core';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [],
  templateUrl: './news-section.html',
  styleUrl: './news-section.scss',
})
export class NewsSection {
  news = [1, 2, 3];
}
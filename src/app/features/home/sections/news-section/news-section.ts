import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [],
  templateUrl: './news-section.html',
  styleUrl: './news-section.scss',
})
export class NewsSection {

  news = [1, 2, 3];

  @ViewChild('cards')
  cards!: ElementRef<HTMLDivElement>;

  scrollLeft(): void {
    this.cards.nativeElement.scrollBy({
      left: -520,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    this.cards.nativeElement.scrollBy({
      left: 520,
      behavior: 'smooth',
    });
  }

}
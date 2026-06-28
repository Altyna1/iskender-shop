import { Component } from '@angular/core';
import { HeroSlider } from './sections/hero-slider/hero-slider';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { CategoriesSection } from './sections/categories-section/categories-section';
import { NewsSection } from './sections/news-section/news-section';
import { AuctionSection } from './sections/auction-section/auction-section';
import { StoresSection } from './sections/stores-section/stores-section';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    HeroSlider,
    CategoriesSection,
    NewsSection,
    AuctionSection,
    StoresSection,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
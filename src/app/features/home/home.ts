import { Component } from '@angular/core';
import { HeroSlider } from './sections/hero-slider/hero-slider';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Header,
    HeroSlider,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
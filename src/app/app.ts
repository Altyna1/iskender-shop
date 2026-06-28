import { Component } from '@angular/core';
import { Home } from './features/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
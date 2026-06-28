import { Component } from '@angular/core';

@Component({
  selector: 'app-auction-section',
  standalone: true,
  imports: [],
  templateUrl: './auction-section.html',
  styleUrl: './auction-section.scss',
})
export class AuctionSection {
  products = [1, 2, 3, 4];
}
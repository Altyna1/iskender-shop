import {
  Component,
  ElementRef,
  ViewChild,
  inject
} from '@angular/core';

import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../core/models/product.model';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-auction-section',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './auction-section.html',
  styleUrl: './auction-section.scss',
})
export class AuctionSection {

  private productService = inject(ProductService);

  products: Product[] = [];

  @ViewChild('cards')
  cards!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    this.productService.getAuctionProducts().subscribe(data => {
      this.products = data;
    });
  }

  scrollLeft() {
    this.cards.nativeElement.scrollBy({
      left: -280,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.cards.nativeElement.scrollBy({
      left: 280,
      behavior: 'smooth'
    });
  }

}
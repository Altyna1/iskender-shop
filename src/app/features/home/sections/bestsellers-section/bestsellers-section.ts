import {
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';

import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../core/models/product.model';
import { ProductCard } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-bestsellers-section',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './bestsellers-section.html',
  styleUrl: './bestsellers-section.scss',
})
export class BestsellersSection {

  private productService = inject(ProductService);

  products: Product[] = [];

 @ViewChild('productsContainer')
  productsContainer!: ElementRef<HTMLDivElement>;
 
  ngOnInit() {
    this.productService.getBestsellers().subscribe((data) => {
      this.products = data;
    });
  }

  scrollLeft() {
    this.productsContainer.nativeElement.scrollBy({
      left: -280,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.productsContainer.nativeElement.scrollBy({
      left: 280,
      behavior: 'smooth',
    });
  }
}
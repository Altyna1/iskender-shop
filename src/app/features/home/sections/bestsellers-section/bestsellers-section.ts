import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../core/models/product.model';
import { ProductCard } from '../../../../shared/components/product-card/product-card';
import { Component, inject } from '@angular/core';

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

  ngOnInit() {
    this.productService.getBestsellers().subscribe((data) => {
      this.products = data;
    });
  }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { Counter } from '../counter/counter';
import { Badge } from '../badge/badge';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [Counter, Badge],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input({ required: true }) product!: Product;

  @Input() variant: 'default' | 'auction' = 'default';

  @Output() addToCart = new EventEmitter<Product>();

  addProduct(): void {
    this.addToCart.emit(this.product);
  }
}
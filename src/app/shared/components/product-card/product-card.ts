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

  @Input({ required: true })
  product!: Product;

  @Input()
  variant: 'default' | 'auction' = 'default';

  @Output()
  addToCart = new EventEmitter<Product>();

  @Output()
  toggleFavorite = new EventEmitter<number>();

  @Output()
  quantityChange =
    new EventEmitter<{
      id: number;
      quantity: number;
    }>();

  onAddToCart(): void {

    this.addToCart.emit(this.product);

  }

  onToggleFavorite(): void {

    this.toggleFavorite.emit(this.product.id);

  }

  onQuantityChange(quantity: number): void {

    this.quantityChange.emit({

      id: this.product.id,

      quantity

    });

  }

}
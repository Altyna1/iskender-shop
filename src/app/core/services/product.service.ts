import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Держатель для лейки BOOU PG605',
      image: 'assets/images/product-1.jpg',
      price: 1294,
      currency: 'с',
      inStock: true,
      badge: 'В наличии',
      isFavorite: false,
      quantity: 1,
    },
  ];

  getBestsellers(): Observable<Product[]> {
    return of(this.products);
  }

  getAuctionProducts(): Observable<Product[]> {
    return of(
      this.products.map((product) => ({
        ...product,
        oldPrice: product.price * 10,
      }))
    );
  }
}
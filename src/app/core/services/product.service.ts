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
      image: 'images/Dushevie_kabini_68.jpg',
      price: 1294,
      currency: 'с',
      inStock: true,
      badge: 'В наличии',
      isFavorite: false,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Душевая кабина Classic',
      image: 'images/Dushevie_kabini_68.jpg',
      price: 18990,
      currency: 'с',
      inStock: true,
      badge: 'В наличии',
      isFavorite: false,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Смеситель Iskender',
      image: 'images/Dushevie_kabini_68.jpg',
      price: 3490,
      currency: 'с',
      inStock: true,
      badge: 'В наличии',
      isFavorite: false,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Раковина Comfort',
      image: 'images/Dushevie_kabini_68.jpg',
      price: 4250,
      currency: 'с',
      inStock: true,
      badge: 'В наличии',
      isFavorite: false,
      quantity: 1,
    },
    {
      id: 5,
      title: 'Унитаз Modern',
      image: 'images/Dushevie_kabini_68.jpg',
      price: 7990,
      currency: 'с',
      inStock: true,
      badge: 'В наличии',
      isFavorite: false,
      quantity: 1,
    },
    {
      id: 6,
      title: 'Полотенцесушитель Lux',
      image: 'images/Dushevie_kabini_68.jpg',
      price: 6990,
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
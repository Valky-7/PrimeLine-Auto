import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Produto[] = [];
  private cartSubject = new BehaviorSubject<Produto[]>([]);

  cartItems$ = this.cartSubject.asObservable();

  addToCart(product: Produto) {
    this.items.push(product);
    this.cartSubject.next([...this.items]);
  }
  removeItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    this.cartSubject.next([...this.items]);
  }
  getTotal(): number {
    return this.items.reduce((total, p) => total + p.preco, 0);
  }

  get itemsCount(): number {
    return this.items.length;
  }
}
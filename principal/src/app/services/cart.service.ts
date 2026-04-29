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
    const index = this.items.findIndex(item => item.id === id);

    if (index !== -1) {
      this.items.splice(index, 1);
      this.cartSubject.next([...this.items]);

    }
  }
  clearCart() {
    this.items = [];
    this.cartSubject.next([]);

  }

  getTotal(): number {
    return this.items.reduce((total, p) => total + p.preco, 0);
  }

  get itemsCount(): number {
    return this.items.length;
  }
}
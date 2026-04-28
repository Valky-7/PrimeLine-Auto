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
  
  // Observable para os componentes "ouvirem" as mudanças
  cartItems$ = this.cartSubject.asObservable();

  addToCart(product: Produto) {
    this.items.push(product);
    this.cartSubject.next([...this.items]); // Emite nova lista
  }

  getTotal(): number {
    return this.items.reduce((total, p) => total + p.preco, 0);
  }

  get itemsCount(): number {
    return this.items.length;
  }
}
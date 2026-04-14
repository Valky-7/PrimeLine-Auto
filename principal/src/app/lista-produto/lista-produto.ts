import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-produto.html',
  styleUrl: './lista-produto.css',
})
export class ListaProduto {
  produtos = [
    { id: 1, nome: 'Kit Freios Brembo', preco: 1899.90, img: '' },
    { id: 2, nome: 'Amortecedores KYB', preco: 1249.90, img: ''},
    { id: 3, nome: 'Bateria Moura Premium', preco: 649.90, img: ''},
    { id: 4, nome: 'Farol LED Matrix', preco: 999.90, img: ''},
    { id: 5, nome: 'Kit Correia + Tensor', preco: 289.90, img: ''},
    { id: 6, nome: 'Pneus Michelin Sport', preco: 1499.90, img: ''}
  ];
}

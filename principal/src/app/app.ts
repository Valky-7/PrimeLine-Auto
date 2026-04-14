import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Fundo } from './fundo/fundo';
import { ListaProduto } from './lista-produto/lista-produto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Fundo, ListaProduto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('principal');
}

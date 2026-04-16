import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Catalogo } from './catalogo/catalogo';
import { Promocoes } from './promocoes/promocoes';
import { Contato } from './contato/contato';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, Catalogo, Promocoes, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('principal');
}

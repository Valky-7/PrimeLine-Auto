import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  standalone: true,
  styleUrl: './header.css',
})
export class Header {
  isScrolled = false;
  isCartOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  scrollTo(id: string, event?: Event) {
    if (event) {
      event.preventDefault(); 
    }
  
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 90;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    this.isCartOpen = false;

  }
}
}
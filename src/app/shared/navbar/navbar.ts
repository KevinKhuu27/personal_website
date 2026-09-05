import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})

export class Navbar {
  mobileMenuOpen = signal(false);
  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}
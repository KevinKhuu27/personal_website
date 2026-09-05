import { Component, OnInit, OnDestroy, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html'
})
export class Landing implements OnInit, OnDestroy {
  phrases = [
    'Computer Science Student',
    'Toronto Metropolitan University',
    'Aspiring Software Engineer'
  ];

  currentIndex = signal(0);
  isLeaving = signal(false);

  private intervalId?: ReturnType<typeof setInterval>;
  private prefersReducedMotion = false;
  private platformId = inject(PLATFORM_ID);

  get currentPhrase(): string {
    return this.phrases[this.currentIndex()];
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    this.intervalId = setInterval(() => this.cycle(), 2800);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private cycle(): void {
    if (this.prefersReducedMotion) {
      this.currentIndex.set((this.currentIndex() + 1) % this.phrases.length);
      return;
    }

    this.isLeaving.set(true);

    setTimeout(() => {
      this.currentIndex.set((this.currentIndex() + 1) % this.phrases.length);
      this.isLeaving.set(false);
    }, 500);
  }
}
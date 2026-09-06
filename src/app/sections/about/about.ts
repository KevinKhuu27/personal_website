import { Component, OnInit, ElementRef, PLATFORM_ID, inject, viewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { animate, inView, hover } from 'motion';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private photo = viewChild<ElementRef>('photo');
  private bio = viewChild<ElementRef>('bio');
  private headshotImg = viewChild<ElementRef>('headshotImg');

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    inView(this.photo()!.nativeElement, () => {
      animate(
        this.photo()!.nativeElement,
        { opacity: [0, 1], x: [-24, 0] },
        { duration: 0.7, ease: 'easeOut' }
      );
    });

    inView(this.bio()!.nativeElement, () => {
      animate(
        this.bio()!.nativeElement,
        { opacity: [0, 1], x: [24, 0] },
        { duration: 0.7, ease: 'easeOut', delay: 0.15 }
      );
    });

    hover(this.headshotImg()!.nativeElement, (element) => {
      animate(
        element,
        { scale: 1.04 },
        { duration: 0.2, ease: 'easeOut' }
      );

      return () => {
        animate(
          element,
          { scale: 1, borderColor: '#3a4149' },
          { duration: 0.3, ease: 'easeOut' }
        );
      };
    });
  }
}
import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { animate } from 'motion';

interface Project {
  title: string;
  gifUrl: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html'
})
export class Projects {
  private modalBackdrop = viewChild<ElementRef>('modalBackdrop');
  private modalBox = viewChild<ElementRef>('modalBox');

  projects: Project[] = [
    {
      title: 'Club Management App',
      gifUrl: '/project4.gif',
      description: 'An application used to manage a Salsa Club built using front-end and back-end technology. Includes the use of forms, databases, and password authentication.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Firebase'],
      demoUrl: 'https://cps-406-shops--salsa-studio.firebaseapp.com/',
      repoUrl: 'https://github.com/TomorrowInka/CPS406_iteration_2_41'
    }
  ];

  selectedProject = signal<Project | null>(null);

  onCardEnter(event: Event): void {
    const frame = (event.currentTarget as HTMLElement).querySelector<HTMLElement>('.gif-frame');
    if (frame) {
      animate(
        frame,
        {
          borderColor: '#e7e4dc',
          boxShadow: '0 0 4px rgba(231, 228, 220, 0.5)'
        },
        { duration: 0.2, ease: 'easeOut' }
      );
    }
  }

  onCardLeave(event: Event): void {
    const frame = (event.currentTarget as HTMLElement).querySelector<HTMLElement>('.gif-frame');
    if (frame) {
      animate(
        frame,
        {
          borderColor: '#3a4149',
          boxShadow: '0 0 0px rgba(212, 161, 61, 0)'
        },
        { duration: 0.2, ease: 'easeOut' }
      );
    }
  }

  openProject(project: Project): void {
    this.selectedProject.set(project);

    const backdrop = this.modalBackdrop()!.nativeElement;
    const box = this.modalBox()!.nativeElement;

    backdrop.classList.remove('pointer-events-none');

    animate(backdrop, { opacity: [0, 1] }, { duration: 0.25, ease: 'easeOut' });
    animate(box, { opacity: [0, 1], scale: [0.95, 1] }, { duration: 0.25, ease: 'easeOut' });
  }

  closeProject(): void {
    const backdrop = this.modalBackdrop()!.nativeElement;
    const box = this.modalBox()!.nativeElement;

    animate(backdrop, { opacity: [1, 0] }, { duration: 0.2, ease: 'easeOut' }).finished.then(() => {
      backdrop.classList.add('pointer-events-none');
      this.selectedProject.set(null);
    });

    animate(box, { opacity: [1, 0], scale: [1, 0.95] }, { duration: 0.2, ease: 'easeOut' });
  }
}
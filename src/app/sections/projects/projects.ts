import { Component, signal } from '@angular/core';

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

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }
}
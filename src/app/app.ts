import { Component, signal } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Landing } from './sections/landing/landing';
import { About } from './sections/about/about';
import { Projects } from './sections/projects/projects';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Landing, About, Projects, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personal-website');
}

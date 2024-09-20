import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'patriguard2';

  showNavbar: boolean = false;

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showNavbar = this.router.url !== '/'; // Afficher la navbar uniquement si l'URL n'est pas la route par défaut
    });
  }
}

import { Component, HostListener, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isSticky: boolean = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isSticky = scrollPosition > 50; // Change 50 to your desired scroll position
  }

  // for toggling event
  className: string = 'hidden';

  toggleClassName() {
      this.className = this.className === 'hidden' ? 'flex' : 'hidden';
  }
}

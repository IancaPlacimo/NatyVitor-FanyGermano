import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  imports: [FooterComponent],
})
export class CursosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}

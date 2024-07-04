import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sobremim',
  standalone: true,
  templateUrl: './sobremim.component.html',
  styleUrl: './sobremim.component.scss',
  imports: [FooterComponent],
})
export class SobremimComponent {}

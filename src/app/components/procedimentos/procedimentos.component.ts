import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-procedimentos',
  standalone: true,
  templateUrl: './procedimentos.component.html',
  styleUrl: './procedimentos.component.scss',
  imports: [FooterComponent, HeaderComponent],
})
export class ProcedimentosComponent {}

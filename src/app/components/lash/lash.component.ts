import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-lash',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './lash.component.html',
  styleUrl: './lash.component.scss',
})
export class LashComponent {}

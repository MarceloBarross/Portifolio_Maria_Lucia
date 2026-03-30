import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { Atendimentos } from './atendimentos';
import { Footer } from './footer/footer';
import { PreFooter } from './pre-footer/pre-footer';
import { Relatos } from './relatos/relatos';
import { Portifolio } from './portifolio/portifolio';
import { Antendimentos } from './antendimentos/antendimentos';
import { Apresentacao } from './apresentacao/apresentacao';
import { Toolbar } from './toolbar/toolbar';

@Component({
  selector: 'app-root',
  imports: [
    ToolbarModule,
    ButtonModule,
    MatIconModule,
    CarouselModule,
    Footer,
    PreFooter,
    Relatos,
    Portifolio,
    Antendimentos,
    Apresentacao,
    Toolbar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
}

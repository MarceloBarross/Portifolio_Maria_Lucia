import { Component } from '@angular/core';
import { Atendimentos } from '../atendimentos';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-portifolio',
  imports: [CarouselModule],
  templateUrl: './portifolio.html',
  styleUrl: './portifolio.css',
})
export class Portifolio {
  public responsiveOptions: any[] | undefined;
  public atendimentos: Atendimentos[] = [
    {
      nome: 'Clareamento',
      descricao:
        'Clareamento dental eficaz clareia a cor dos dentes, deixando o sorriso mais branco.',
      img_adress: 'clareamento_',
    },
    {
      nome: 'Restauração',
      descricao: 'Restauração reconstroi dentes, devolvendo forma, função e estética.',
      img_adress: 'protese_',
    },
    {
      nome: 'Canal em dentes decíduos',
      descricao:
        'Tratamento de canal seguido de restauração na odontopediatria, preservando os dentes de leite até sua troca natural.',
      img_adress: 'restauracao_crianca_',
    },
    {
      nome: 'Canal',
      descricao:
        'Urgências endodônticas e restauração provisória, em casos de dor intensa por inflamação da polpa.',
      img_adress: 'canal_',
    },
  ];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}

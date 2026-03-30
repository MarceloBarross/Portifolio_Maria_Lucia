import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Relato } from './relatoModel';

@Component({
  selector: 'app-relatos',
  imports: [CarouselModule],
  templateUrl: './relatos.html',
  styleUrl: './relatos.css',
})
export class Relatos {

  public responsiveOptions: any[] | undefined;
  public relatos: Relato[] = [
    {
      nome: 'Olívia',
      depoimento:
        'Gostei muito do atendimento da doutora. Estava com muita dor de dente, e depois de me explicar o procedimento a doutora começou o tratamento, que foi muito tranquilo, não senti nada!',
    },
    {
      nome: 'Claudia',
      depoimento:
        'Indico muito a doutora! Quando comecei o tratamento, tinha muita vergonha de sorrir, só saia de máscara. Agora que finalizei, não sinto mais! Minha gratidão!',
    },
    {
      nome: 'Ana Vitória',
      depoimento:
        'Procurei a doutora pra fazer uma limpeza durante meu tratamento ortodôntico. Já tinha feito o procedimento com outros dentistas, mas nunca desse jeito! Nunca vi uma limpeza tão completa, dá pra ver a atenção que a doutora deu.',
    },
    {
      nome: 'Carlos',
      depoimento:
        'Descobri que estava precisando fazer algumas restaurações. Quando comecei o tratamento com a doutora, ela foi muito paciente e me explicou como íamos fazer. As restaurações ficaram muito bonitas!',
    },
    {
      nome: 'Antônio',
      depoimento:
        'A dra Maria já é minha doutora! Percebi o carinho e dedicação desde o primeiro atendimento. Sempre que posso volto nela pra continuar meus tratamentos!',
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
    this.relatos.forEach((relato) => {
      relato.cor = this.getCorAleatoria();
    });
  }

  getCorAleatoria(): string {

    const coresAvatares = ['#AD998B', '#C2B280', '#D6C7B1', '#E5E1DA', '#A68E6E'];
    const index = Math.floor(Math.random() * coresAvatares.length);
    return coresAvatares[index];
  }


}

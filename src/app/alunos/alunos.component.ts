import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent {
  alunos = [
    {
      nome: 'hamilton',
      status: 'pendente',
      nota: 5.5,
    },
    {
      nome: 'Kelvis',
      status: 'aprovado',
      nota: 10,
    },
    {
      nome: 'Gordinho bololo',
      status: 'reprovado',
      nota: 4,
    },
    {
      nome: 'Gaiao',
      status: 'pendente',
      nota: 5,
    },
  ];
}

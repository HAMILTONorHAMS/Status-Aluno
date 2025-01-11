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
  atualizaStatus({ nome, status}: { nome: string; status: string}): void{
    this.alunos = this.alunos.map((aluno) =>
      aluno.nome === nome ? { ...aluno, status } : aluno);
  }
  //Um método que pega o objeto e desestrutura ele, pegando nome  e status. Depois tipamos eles
  //Map para poder criar um novo array alunos, executando map a cada aluno
  // => Depois aluno.nome === nome  Verifica se o nome do aluno atual(aluno.nome) e igual ao fornecido(nome)
  //Condicao ternaria: caso aluno.nome === nome for verdadeira - criará um novo array e atualizará o status, senao vai ser o objeto original
  //Usando spread operator(...) copiamos todas as propriedades do aluno e irá sobreescrever o status.
}

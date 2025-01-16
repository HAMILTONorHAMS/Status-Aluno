import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
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

  definirStatus(nota: number): string {
    if (nota >= 6) return 'aprovado';
    if (nota >= 5) return 'pendente';
    return 'reprovado';
  }

  adicionarAluno(novoAluno: { nome: string; nota: number }): void {
    const status = this.definirStatus(novoAluno.nota);
    this.alunos.push({ ...novoAluno, status });
  }

  atualizarStatus(nome: string, status: string): void {
    // Exemplo de lógica: Atualiza o status do aluno
    const aluno = this.alunos.find((aluno) => aluno.nome === nome);
    if (aluno) {
      aluno.status = status;
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss'],
})
export class AlunoComponent {
  nome = '';
  nota: number | null = null;

  @Output() alunoAdicionado = new EventEmitter<{
    nome: string;
    nota: number;
  }>();

  limparFormulario(): void {
    this.nome = '';
    this.nota = null;
  }

  adicionar(): void {
    if (this.nome && this.nota !== null) {
      this.alunoAdicionado.emit({ nome: this.nome, nota: this.nota });
      this.limparFormulario();
    } else {
      alert('Preencha todos os campos!');
    }
  }
}

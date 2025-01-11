import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent {
  @Input() aluno :{nome:string, nota:number, status:string} | null = null;//Informa o tipo de informação que vai receber do "pai"
  @Output() statusAlterado = new EventEmitter<{ // Cria um out put que recebe um evento do tipo objeto
    nome: string;
    status: string;
  }>();//Usamos () para chamar o constructor da classe 

  aprovarFn(): void{
    this.aluno?.nome &&
      this.statusAlterado.emit({ nome: this.aluno.nome, status: 'aprovado'})
  };
  /// Aqui criamos uma função que verifica se o aluno.nome não é nulo.
  /// Pegamos a instancia do eventEmitter e com .emit() emitimos o evento com dados fornecidos
  /// Pegamos o mesmo nome do aluno e enviamos e mudamos os status dele.

  reprovarFn() :void{
    this.aluno?.nome &&
      this.statusAlterado.emit({ nome: this.aluno.nome, status: 'reprovado'})
  };
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent {
  @Input() aluno :{nome:string, nota:number, status:string} | null = null;//Informa o tipo de informação que vai receber do "pai"


  aprovarFn(){

  };
  reprovarFn(){
    
  }

}

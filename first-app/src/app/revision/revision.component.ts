import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})

export class RevisionComponent {
  
  shqQuiz=false;

  shAnsw = false;

displayData = new EventEmitter<{quiz:string}>()
  @Input() data!:{quiz:string}
  Display(quiz:string){
    this.displayData.emit({quiz})

  }
  ShowQuestion(){
    this.shqQuiz=!this.shqQuiz
  }

  showAnsw(){
    this.shAnsw=!this.shAnsw
  }
}

import { Component } from '@angular/core';
import { People } from '../interface';

@Component({
  selector: 'app-ques',
  templateUrl: './ques.component.html',
  styleUrls: ['./ques.component.css']
})
export class QuesComponent {
persons:People[]=[

  {
    name:'Ann',
    city:'Embu',
    age:23,
    gender:'female'
  },

  {
    name:'Ann',
    city:'Embu',
    age:23,
    gender:'female'
  },
  

  {
    name:'Ann',
    city:'Embu',
    age:23,
    gender:'female'
  },
  

  {
    name:'Ann',
    city:'Embu',
    age:23,
    gender:'female'
  },
  

  {
    name:'Ann',
    city:'Embu',
    age:23,
    gender:'female'
  }
  
]
}

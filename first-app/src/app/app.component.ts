import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  data:{quiz:string}={quiz:'Please complete the tasks outlined in the instructions video. Why did you choose the approach you took? Which problems <br> did you encounter'}
}

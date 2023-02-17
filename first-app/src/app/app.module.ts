import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuesComponent } from './ques/ques.component';
import { SortingPipe } from './sorting.pipe';
import { RevisionComponent } from './revision/revision.component';

@NgModule({
  declarations: [
    AppComponent,
    QuesComponent,
    SortingPipe,
    RevisionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

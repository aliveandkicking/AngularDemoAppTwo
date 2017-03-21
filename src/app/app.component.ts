import { Component, ViewChild, AfterViewChecked } from '@angular/core';

import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of exercises';
  titleClassName = 'title'; 
  totalCount = 0;

  @ViewChild(ExerciseListComponent) list: ExerciseListComponent;

  ngAfterViewChecked() {    
    // this.totalCount = this.list.exercises.length    
    console.log('current number of exercises', this.list.exercises.length);    
  }
}

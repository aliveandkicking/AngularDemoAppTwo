import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise/exercise.model'
import { ExerciseListService } from '../exercise-list.service'

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {  
  exercises: Exercise[]

  constructor(
    private exerciseListService: ExerciseListService
  ) { }

  ngOnInit() {
    this.exercises = this.exerciseListService.getExercises()
  }

  onDeleteExercise (exercise: Exercise) {
    for (let i = 0; i < this.exercises.length; i++) {
      if (this.exercises[i].id === exercise.id) {
        this.exercises.splice(i, 1)
      }
    }
  }

}

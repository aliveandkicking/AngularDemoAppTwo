import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Exercise, Muscle, muscleList} from './exercise.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {  
  @Input() exercise: Exercise
  @Output() delete: EventEmitter<Exercise>
  @Output() change: EventEmitter<Exercise>

  isEditMode: boolean = false
  
  constructor(  ) { 
    this.delete = new EventEmitter<Exercise>();
    this.change = new EventEmitter<Exercise>();
  }

  ngOnInit() { 
    
  }

  getMuscleList () {
    let result: Array<Muscle> = []
    for (let muscleName in muscleList) {
      if (muscleList.hasOwnProperty(muscleName)) {
        result.push(muscleList[muscleName]);
      }
    }
    return result
  }

  getMuscleById (id) {
    let result: Array<Muscle> = []
    for (let muscleName in muscleList) {
      if (muscleList.hasOwnProperty(muscleName)) {
        if (muscleList[muscleName].id === id) {
          return muscleList[muscleName]
        }
      }
    }
  }

  deleteExercise (event: any) {    
    this.delete.emit(this.exercise)
  }

  editExercise (event: any) {    
    this.isEditMode = true
  }

  onSubmitChanges (//biktop
    
    // changes: {
    // name: string,
    // isBasic: boolean,
    // muscleId: number,
    // antagonistMuscleId: number
  // }

  nameEdt, 
  isBasicEdt, 
  muscleEdt, 
  antMuscleEdt  
  
  ) {    
    if (!this.isEditMode) { return }

    // let changedExercise: Exercise = new Exercise(
    //   changes.name,
    //   changes.isBasic,
    //   this.getMuscleById(changes.muscleId),
    //   this.getMuscleById(changes.antagonistMuscleId),
    //   false
    // )
    // changedExercise.id = this.exercise.id
    // this.change.emit(changedExercise)
    // this.isEditMode = false
  }

  cancelChanges (event: any) { 
    this.isEditMode = false
  }
}

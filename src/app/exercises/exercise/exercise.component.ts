import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { Exercise, Muscle, muscleList } from './exercise.model';
import { ExerciseEditModeNotificationService } from '../exercise-editmode-notification.service'

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {  
  @Input() exercise: Exercise
  @Output() delete: EventEmitter<Exercise>
  @Output() changeExercise: EventEmitter<Exercise>

  private isEditMode: boolean = false  
  private backgroundColor = 'green';

  constructor(
    private exerciseEditModeNotificationService: ExerciseEditModeNotificationService 
  ) { 
    this.delete = new EventEmitter<Exercise>();
    this.changeExercise = new EventEmitter<Exercise>();
  }

  ngOnInit() { 
    this.exerciseEditModeNotificationService.subscribe(this)
  }

  ngOnDestroy () {
    this.exerciseEditModeNotificationService.unSubscribe(this)
  }

  handleSubscription (): void {
    if (this.isEditMode) {
      this.isEditMode = false
    }
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

  getMuscleById (id: number) {    
    for (let muscleName in muscleList) {
      if (muscleList.hasOwnProperty(muscleName)) {
        if (muscleList[muscleName].id == id) {
          return muscleList[muscleName]
        }
      }
    }
  }

  onMuscleChange (muscleId, antMuscleEdt) {
    let muscle: Muscle = this.getMuscleById(muscleId)
    if (muscle) {
      if (muscle.antagonistMuscle) {
        antMuscleEdt.value = muscle.antagonistMuscle.id        
      }
    }
  }

  deleteExercise (event: any) {    
    this.delete.emit(this.exercise)
  }

  editExercise (event: any) {    
    this.isEditMode = true
    this.exerciseEditModeNotificationService.notify(this)
  }

  onSubmitChanges (
    changes: {
      name: string,
      isBasic: boolean,
      muscleId: number,
      antagonistMuscleId: number
    } 
  ) {    
    if (!this.isEditMode) { return }

    let changedExercise: Exercise = new Exercise(
      changes.name,
      changes.isBasic,
      this.getMuscleById(changes.muscleId),
      this.getMuscleById(changes.antagonistMuscleId),
      false
    )
    changedExercise.id = this.exercise.id
    this.changeExercise.emit(changedExercise)
    this.isEditMode = false
  }

  cancelChanges (event: any) { 
    this.isEditMode = false
  }
}

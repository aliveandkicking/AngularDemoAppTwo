import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseListService } from './exercise-list.service'

@NgModule({
  imports: [CommonModule],
  declarations: [ExerciseComponent, ExerciseListComponent],
  exports: [ExerciseComponent, ExerciseListComponent],
  providers: [ExerciseListService]
})
export class ExercisesModule { }

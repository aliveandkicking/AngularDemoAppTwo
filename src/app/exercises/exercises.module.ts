import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseListService } from './exercise-list.service'
import { ExerciseEditModeNotificationService } from './exercise-editmode-notification.service'
import { ExerciseHighlightDirective } from './exercise-highlight.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [ExerciseComponent, ExerciseListComponent, ExerciseHighlightDirective],
  exports: [ExerciseComponent, ExerciseListComponent],
  providers: [ExerciseListService, ExerciseEditModeNotificationService]
})
export class ExercisesModule { }

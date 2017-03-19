import { Injectable } from '@angular/core';
import {Exercise, muscleList} from './exercise/exercise.model'

const exercises = [
  new Exercise('Bench press', true, muscleList.Chest, muscleList.Back),
  new Exercise('Pullups', true, muscleList.Back, muscleList.Chest),
  new Exercise('Biceps curls', false, muscleList.Biceps, muscleList.Triceps),
  new Exercise('French press', false, muscleList.Triceps, muscleList.Biceps),  
  new Exercise('Pushups', true, muscleList.Chest, muscleList.Back),  
  new Exercise('Squads', true, muscleList.Quadriceps, muscleList.LegBiceps),
  new Exercise('Shrugs', false, muscleList.Neck, muscleList.None)  
]

@Injectable()
export class ExerciseListService {

  constructor() {}

  getExercises() {
    return exercises
  }

}

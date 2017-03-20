export class Muscle {
    maxId: number
    public id: number
    public antagonistMuscle: Muscle = null
    constructor(public name: string) {        
        this.id = Muscle.prototype.maxId++
    }
}

Muscle.prototype.maxId = 0;

class MuscleList {
    None: Muscle = new Muscle('None')
    Chest: Muscle = new Muscle('Chest')
    Back: Muscle = new Muscle('Back')
    Deltas: Muscle = new Muscle('Deltas')
    Biceps: Muscle = new Muscle('Biceps')
    Triceps: Muscle = new Muscle('Triceps')
    Neck: Muscle = new Muscle('Neck')
    Quadriceps: Muscle = new Muscle('Quadriceps')
    LegBiceps: Muscle = new Muscle('LegBiceps')

    constructor(){
        this.Chest.antagonistMuscle = this.Back
        this.Back.antagonistMuscle = this.Chest
        this.Biceps.antagonistMuscle = this.Triceps
        this.Triceps.antagonistMuscle = this.Biceps
        this.Quadriceps.antagonistMuscle = this.LegBiceps
        this.LegBiceps.antagonistMuscle = this.Quadriceps
        //not all muscles have antagonists
    }    
}

export const muscleList = new MuscleList()

export class Exercise {
    maxId: number
    id: number

    constructor(
        public name: string,
        public isBasic: boolean,
        public muscle: Muscle,       
        public antagonistMuscle: Muscle,
        genrateId: boolean = true
    ) {
        if (genrateId) {
            this.id = Exercise.prototype.maxId++            
        }
    }


}

Exercise.prototype.maxId = 0
export class Muscle {
    maxId: number
    public id: number
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
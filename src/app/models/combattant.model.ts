export class Combattant {
    id?: string;
    Fname: string;
    Lname: string;
    country: string;
    height: number;
    weight: number;
    reach: number;
    age: number;
    nbKo: number;
    nbVictory: number;
    combattantPics: string;
    defeat: boolean;
    predilection: string;
    description: string;

    constructor() {
        this.Fname = '';
        this.Lname = '';
        this.country = '';
        this.height = null;
        this.weight = null;
        this.reach = null;
        this.age = null;
        this.nbKo =  null;
        this.nbVictory =null;
        this.combattantPics = '';
        this.defeat = false;
        this.predilection = '';
        this.description = '';
    }
}

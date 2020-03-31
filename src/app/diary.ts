export class Diary {
    showEntry: boolean;
    constructor(public id: number,public name : string, public entry: string, entryDate:Date){
        this.showEntry=false;
    }
 
   
}

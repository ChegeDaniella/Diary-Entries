import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diarys:Diary[]=[
    new Diary(1,"watch my weight","Workouts daily", new Date())
   ]
   toggleEntry(i){
     this.diarys[i].showEntry =!this.diarys[i].showEntry ;
   } 
   deleteDiary(isDelete, i){
     if (isDelete){
       let toDelete = confirm("Are you sure you want to delete this Diary Entry?")

       if (toDelete){
         this.diarys.splice(i,1)
       }
     }
   }

  constructor() { }

  ngOnInit(): void {
  }

}

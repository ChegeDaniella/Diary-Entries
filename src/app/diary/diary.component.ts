import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';


@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diarys:Diary[]=[
    
   ]
   toggleEntry(index){
     this.diarys[index].showEntry =!this.diarys[index].showEntry ;
   } 
   deleteDiary(isDelete, index){
     if (isDelete){
       let toDelete = confirm("Are you sure you want to delete this Diary Entry?")

       if (toDelete){
         this.diarys.splice(index,1);
       }
     }
   }
   addNewEntry(diary){
     let diaryLength = this.diarys.length;
     diary.id = diaryLength ++;
     diary.entryDate = new Date(diary.entryDate)
     this.diarys.push(diary)
     console.log(this.diarys)
     this.diarys.values();

   }

  constructor() { }

  ngOnInit(): void {
  }

}

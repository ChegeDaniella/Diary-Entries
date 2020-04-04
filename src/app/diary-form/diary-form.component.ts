import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {
  @Input() diary:Diary;
  newEntry = new Diary(0,"","", new Date())
  @Output() addDiary = new EventEmitter<any>();


  submitDiary(){
    this.addDiary.emit(this.newEntry);
    this. newEntry = new Diary(0,"","", new Date())
  }

  constructor() { }

  ngOnInit(): void {
  }

}

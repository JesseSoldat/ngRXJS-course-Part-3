import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Lesson } from './../shared/model/lesson';
import { store } from './../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer<Lesson[]>, OnInit {
  lessonsCounter = 0; 
 
  ngOnInit() {
    store.lessonsList$.subscribe(this);  
  }

  //DOES NOT WORK
  // next(data: Lesson[]) {  
  //   console.log('Counter', data);
  //   this.lessonsCounter = data.length;
  // }
  next = (data: Lesson[]) => {
    console.log('Counter', data);
    this.lessonsCounter = data.length;
  }

  error(err: any) {
    console.error(err);
  }
  
  complete() {   
  }

}

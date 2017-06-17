import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import {Observer} from 'rxjs';
import { Lesson } from './../shared/model/lesson';
import { store } from './../event-bus-experiments/app-data';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer<Lesson[]> {
  lessons: Lesson[] = []; 

  ngOnInit() {   
    store.lessonsList$.subscribe(this);          
  }

  //DOES NOT WORK
  // next(data: Lesson[]) {
  //   console.log('List',data);  
  //   this.lessons = data;  
  // }

  next = (data: Lesson[]) => {
    console.log('List', data);
    this.lessons = data; 
  }

  error(err: any) {
    console.error(err);  
  }

  complete() {
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson) {
    store.deleteLesson(deleted);
  }


  select() {
  }

    // createDuration() {
  //   let duration = Math.floor(Math.random() * 1000).toString();

  //   if(duration.length === 2) {
  //     duration = "" + duration + "0";
  //     return duration.slice(0,1) + ':' + duration.slice(1);
  //   }
  //   return duration.slice(0,1) + ':' + duration.slice(1);
  // }

}



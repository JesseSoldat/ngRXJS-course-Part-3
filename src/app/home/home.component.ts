import { Lesson } from './../shared/model/lesson';
import { Course } from './../shared/model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: Course[];
  latestLessons: Lesson[];

  constructor() { }

  ngOnInit() {
  }

}
 
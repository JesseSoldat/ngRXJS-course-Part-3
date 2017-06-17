import {Routes} from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { HomeComponent } from './home/home.component';
export const routerConfig: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'course/:id', component: CourseDetailComponent},
	{path: '', pathMatch: 'full', redirectTo: '/home'}
];
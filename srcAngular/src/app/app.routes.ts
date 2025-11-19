import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CourseManagerComponent } from './pages/course-manager/course-manager.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/detail/:id', component: CourseDetailComponent },
  { path: 'new', component: CourseManagerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }
];

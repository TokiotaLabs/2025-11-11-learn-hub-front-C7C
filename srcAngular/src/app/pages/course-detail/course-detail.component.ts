import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CourseInterface } from '../../core/models';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgFor, NgIf, HeaderComponent, FooterComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit {
  course?: CourseInterface;
  courseId: string = '';

  learningItems = [
    'JavaScript fundamentals and syntax',
    'Working with arrays and objects',
    'Functions and scope',
    'DOM manipulation',
    'Event handling',
    'Asynchronous programming',
    'Error handling',
    'Modern ES6+ features',
  ];

  courseSections = [
    { title: 'Introduction to JavaScript', lessons: 5, duration: '45 min' },
    { title: 'Variables and Data Types', lessons: 8, duration: '1h 15min' },
    { title: 'Control Flow', lessons: 6, duration: '55 min' },
    { title: 'Functions', lessons: 7, duration: '1h 30min' },
  ];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      if (this.courseId) {
        this.loadCourse();
      }
    });
  }

  loadCourse(): void {
    this.courseService.getCourseById(this.courseId).subscribe({
      next: (course) => {
        this.course = course;
      },
      error: (error) => {
        console.error('Error loading course:', error);
      }
    });
  }
}

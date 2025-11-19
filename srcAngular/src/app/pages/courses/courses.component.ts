import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CourseInterface } from '../../core/models';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: Partial<CourseInterface>[] = [];
  filteredCourses: Partial<CourseInterface>[] = [];
  searchFilter: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.filteredCourses = courses;
      },
      error: (error) => {
        console.error('Error loading courses:', error);
      }
    });
  }

  onSearchChange(): void {
    if (!this.searchFilter) {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course =>
        course.title?.toLowerCase().includes(this.searchFilter.toLowerCase()) ||
        course.description?.toLowerCase().includes(this.searchFilter.toLowerCase())
      );
    }
  }
}

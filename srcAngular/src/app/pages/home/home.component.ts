import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CourseInterface } from '../../core/models';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  courses: Partial<CourseInterface>[] = [];
  heroImageUrl = 'https://cdn.builder.io/api/v1/image/assets/TEMP/af42a541c37b1712a1396231dab07753cb7580a59bea72d76f4c768d7a2d7110?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a';

  testimonial = {
    quote: 'LearnHub has transformed my career! The courses are well-structured and the community support is outstanding.',
    name: 'Emily Johnson',
    role: 'Software Developer',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e922464baea409103a49400a49011315ce9211ace6b214a6000dcd7d7c6995f6?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a'
  };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (error) => {
        console.error('Error loading courses:', error);
      }
    });
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CourseInterface } from '../../core/models';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-course-manager',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './course-manager.component.html',
  styleUrl: './course-manager.component.css'
})
export class CourseManagerComponent {
  formData: Partial<CourseInterface> = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    duration: 0,
    price: 0,
    prerequisites: '',
    instructorId: 'c7d42d4c-9ac4-49b0-8ea4-9644c045c94c',
    modality: '',
    includedMaterials: '',
    certification: '',
    availableSeats: 0,
    location: '',
    category: '',
  };

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  handleSubmit(event: Event): void {
    event.preventDefault();
    
    this.courseService.createCourse(this.formData).subscribe({
      next: (course) => {
        console.log('Course created:', course);
        alert('Curso creado exitosamente');
        this.router.navigate(['/courses']);
      },
      error: (error) => {
        console.error('Error creating course:', error);
        alert('Error al crear el curso');
      }
    });
  }
}

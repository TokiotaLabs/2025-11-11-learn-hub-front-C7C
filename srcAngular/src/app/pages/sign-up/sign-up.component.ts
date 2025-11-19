import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { StudentService } from '../../core/services/student.service';
import { StudentInterface } from '../../core/models';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  formData: Partial<StudentInterface> = {
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: ''
  };

  constructor(private studentService: StudentService) {}

  handleSubmit(event: Event): void {
    event.preventDefault();
    
    this.studentService.createStudent(this.formData).subscribe({
      next: (student) => {
        console.log('Student created:', student);
        this.resetForm();
        alert('Usuario registrado exitosamente');
      },
      error: (error) => {
        console.error('Error creating student:', error);
        alert('Error al registrar usuario');
      }
    });
  }

  resetForm(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: ''
    };
  }
}

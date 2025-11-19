import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.css'
})
export class NewsletterFormComponent {
  email: string = '';

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Newsletter subscription:', this.email);
    // Add newsletter subscription logic here
  }
}

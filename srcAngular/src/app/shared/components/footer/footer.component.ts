import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor, NewsletterFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logoUrl = 'https://cdn.builder.io/api/v1/image/assets/TEMP/5752f07aeb487626cf94aea5654fa25287ad863327678189446977fa13138c49?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a';
  
  navItems = ['Pricing', 'About us', 'Features', 'Help Center', 'Contact us', 'FAQs', 'Careers'];
  
  socialPlatforms = [
    { name: 'Facebook', index: 0 },
    { name: 'Twitter', index: 1 },
    { name: 'Instagram', index: 2 },
    { name: 'LinkedIn', index: 3 }
  ];

  getSocialIconUrl(index: number): string {
    return `http://b.io/ext_${17 + index}-`;
  }
}

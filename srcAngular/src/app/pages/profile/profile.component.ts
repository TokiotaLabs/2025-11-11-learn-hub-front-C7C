import { Component } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  enrolledCourses = [
    { name: 'JavaScript 101', progress: 75 },
    { name: 'React Fundamentals', progress: 45 },
    { name: 'TypeScript Essentials', progress: 90 },
  ];
}

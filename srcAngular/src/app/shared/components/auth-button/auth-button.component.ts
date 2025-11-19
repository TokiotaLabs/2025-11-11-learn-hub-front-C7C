import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.css'
})
export class AuthButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'outline' | 'solid' = 'solid';
  @Input() iconUrl: string = '';
  @Input() url: string = '';

  get buttonClasses(): string {
    const baseClasses = 'flex overflow-hidden gap-1.5 px-8 py-2 rounded-xl border border-solid rotate-[2.4492937051703357e-16rad] max-md:px-5';
    const variantClasses = this.variant === 'outline'
      ? 'text-indigo-500 bg-white border-indigo-500'
      : 'text-white bg-indigo-500 border-black border-opacity-0';
    return `${baseClasses} ${variantClasses}`;
  }

  get textClasses(): string {
    return this.variant === 'outline' ? 'text-indigo-500' : 'text-white';
  }
}

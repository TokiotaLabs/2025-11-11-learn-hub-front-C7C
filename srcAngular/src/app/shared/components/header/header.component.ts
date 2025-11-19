import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { AuthButtonComponent } from '../auth-button/auth-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NavigationComponent, AuthButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logoUrl = 'https://cdn.builder.io/api/v1/image/assets/TEMP/48b6d4306273d64ca054dedb3bc30ebbbbb8e97dfd3c2faffcfa1937631d151b?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a';
  signUpIconUrl = 'https://cdn.builder.io/api/v1/image/assets/TEMP/6810e255885f5b90fc97b660927de67d9e33675c6d1a6f5b377da140257fbc1b?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a';
  signInIconUrl = 'https://cdn.builder.io/api/v1/image/assets/TEMP/49d4e4c88334cf38a88fd2471d65bd3852400ddfa054742c489b7e2ae99279c6?placeholderIfAbsent=true&apiKey=43f93c4c444042188d8c548c6db7827a';
}

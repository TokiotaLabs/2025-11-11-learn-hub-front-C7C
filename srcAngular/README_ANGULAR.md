# LearnHub - Angular Application

This is the Angular 18 (LTS) migration of the LearnHub React application.

## Project Information

- **Framework**: Angular 18.2.14 (LTS)
- **Node.js**: v20.19.5 (LTS)
- **Package Manager**: npm 10.8.2
- **Styling**: TailwindCSS 3.x
- **Architecture**: Standalone Components with SOLID Principles

## Project Structure

```
srcAngular/
├── src/
│   ├── app/
│   │   ├── core/                    # Core functionality (services, models, interceptors)
│   │   │   ├── interceptors/        # HTTP interceptors
│   │   │   ├── models/              # TypeScript interfaces and types
│   │   │   └── services/            # Business logic services
│   │   ├── shared/                  # Shared components
│   │   │   └── components/          # Reusable UI components
│   │   ├── pages/                   # Page components (routed)
│   │   ├── app.routes.ts            # Application routing configuration
│   │   └── app.config.ts            # Application configuration
│   ├── environments/                # Environment configurations
│   └── styles.css                   # Global styles with TailwindCSS
├── angular.json                     # Angular CLI configuration
├── tailwind.config.js               # TailwindCSS configuration
└── package.json                     # Dependencies and scripts
```

## Features

### Pages Implemented

1. **Home** (`/`) - Landing page with hero section, popular courses, and testimonials
2. **Courses** (`/courses`) - Course catalog with search functionality
3. **Course Detail** (`/courses/detail/:id`) - Detailed course information
4. **Sign Up** (`/sign-up`) - User registration form
5. **Course Manager** (`/new`) - Create new courses
6. **Profile** (`/profile`) - User profile with enrolled courses

### Core Services

- **CourseService**: CRUD operations for courses
- **StudentService**: Student management
- **GlobalStateService**: Application state management using RxJS BehaviorSubject
- **API Interceptor**: HTTP interceptor for authentication and error handling

### Shared Components

- **Header**: Navigation bar with authentication buttons
- **Footer**: Site footer with newsletter subscription
- **Navigation**: Routing navigation with active link highlighting
- **AuthButton**: Reusable authentication button
- **NewsletterForm**: Newsletter subscription form

## Development Setup

### Prerequisites

- Node.js 20.x (LTS)
- npm 10.x

### Installation

```bash
cd srcAngular
npm install
```

### Development Server

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change source files.

### Build

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Production Build

```bash
ng build --configuration production
```

## Architecture Principles

### SOLID Principles Applied

1. **Single Responsibility**: Each component and service has a single, well-defined purpose
2. **Open/Closed**: Components are open for extension through inputs and outputs
3. **Liskov Substitution**: Services implement consistent interfaces
4. **Interface Segregation**: Models are split into focused interfaces
5. **Dependency Inversion**: Components depend on service abstractions via dependency injection

### Design Patterns

- **Standalone Components**: Modern Angular approach without NgModules
- **Reactive Programming**: RxJS for asynchronous operations and state management
- **Service Layer**: Separation of business logic from presentation
- **HTTP Interceptors**: Centralized request/response handling

## API Configuration

The application connects to a backend API configured in `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5039/api'
};
```

Update this URL according to your backend configuration.

## Styling

The application uses TailwindCSS for styling with the following features:

- Utility-first CSS
- Responsive design
- Custom color scheme matching the original React application
- Dark mode support (inherited from global styles)

## Testing

```bash
npm test
# or
ng test
```

## Code Quality

### Linting

Angular uses ESLint for code quality. Run:

```bash
ng lint
```

### Formatting

The project follows Angular's style guide and uses Prettier configuration.

## Migration Notes

This Angular application is a migration from the original React application with the following changes:

- React Context → Angular Services with RxJS
- React Hooks → Angular Lifecycle Hooks
- React Router → Angular Router
- Axios → Angular HttpClient
- React Components → Angular Standalone Components
- Props → @Input/@Output decorators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Support

For questions or issues, please contact the development team.

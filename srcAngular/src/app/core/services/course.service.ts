import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseInterface } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly apiUrl = `${environment.apiUrl}/course`;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Partial<CourseInterface>[]> {
    return this.http.get<Partial<CourseInterface>[]>(this.apiUrl);
  }

  getCourseById(id: string): Observable<CourseInterface> {
    return this.http.get<CourseInterface>(`${this.apiUrl}/${id}`);
  }

  createCourse(courseData: Partial<CourseInterface>): Observable<CourseInterface> {
    return this.http.post<CourseInterface>(this.apiUrl, courseData);
  }

  updateCourse(id: string, courseData: Partial<CourseInterface>): Observable<CourseInterface> {
    return this.http.put<CourseInterface>(`${this.apiUrl}/${id}`, courseData);
  }

  deleteCourse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

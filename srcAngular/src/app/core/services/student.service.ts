import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentInterface } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly apiUrl = `${environment.apiUrl}/student`;

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Partial<StudentInterface>[]> {
    return this.http.get<Partial<StudentInterface>[]>(this.apiUrl);
  }

  createStudent(data: Partial<StudentInterface>): Observable<StudentInterface> {
    return this.http.post<StudentInterface>(this.apiUrl, data);
  }
}

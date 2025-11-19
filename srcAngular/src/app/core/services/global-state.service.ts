import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CourseInterface } from '../models';

export interface GlobalState {
  courses: CourseInterface[] | undefined;
  user: string | null;
}

const initialState: GlobalState = {
  user: null,
  courses: [],
};

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private stateSubject = new BehaviorSubject<GlobalState>(initialState);
  public state$: Observable<GlobalState> = this.stateSubject.asObservable();

  constructor() {}

  get currentState(): GlobalState {
    return this.stateSubject.value;
  }

  setUser(user: string): void {
    this.stateSubject.next({
      ...this.currentState,
      user
    });
  }

  clearUser(): void {
    this.stateSubject.next({
      ...this.currentState,
      user: null
    });
  }

  setCourses(courses: CourseInterface[]): void {
    this.stateSubject.next({
      ...this.currentState,
      courses
    });
  }

  clearCourses(): void {
    this.stateSubject.next({
      ...this.currentState,
      courses: []
    });
  }

  getUser(): Observable<string | null> {
    return new Observable(observer => {
      this.state$.subscribe(state => observer.next(state.user));
    });
  }

  getCourses(): Observable<CourseInterface[] | undefined> {
    return new Observable(observer => {
      this.state$.subscribe(state => observer.next(state.courses));
    });
  }
}

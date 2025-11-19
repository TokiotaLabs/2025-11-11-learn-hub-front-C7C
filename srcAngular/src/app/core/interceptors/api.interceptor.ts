import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  
  // Clone the request and add authorization header if token exists
  const authReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : req;

  // Handle the request and catch errors
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('No autorizado. Redirigiendo a login...');
      } else if (error.status === 403) {
        console.error('Acceso prohibido.');
      } else if (error.error) {
        console.error('Error en la respuesta de la API:', error.error);
      } else if (error.status === 0) {
        console.error('No hubo respuesta del servidor.');
      } else {
        console.error('Error en la configuración de la solicitud.');
      }
      return throwError(() => error);
    })
  );
};

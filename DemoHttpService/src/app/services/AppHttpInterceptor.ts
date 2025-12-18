import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpInterceptorFn } from '@angular/common/http';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
    console.log(req);
  const cloned = req.clone({
    setHeaders: {
      'Content-Type': 'application/json'
    }
  });
  return next(cloned);
};

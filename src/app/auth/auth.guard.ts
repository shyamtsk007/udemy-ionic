import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor( 
    private authSertvice: AuthService,
    private router: Router
    ) {}

  canLoad(route: Route, 
    segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.authSertvice.userIsAuthenticated) {
      this.router.navigateByUrl('/auth');
    }
      return this.authSertvice.userIsAuthenticated;
  }
 
  
}

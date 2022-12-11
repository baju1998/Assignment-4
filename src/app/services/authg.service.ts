import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { commentmakerService } from './commentmaker.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGService implements CanActivate{

  constructor(private dogSvc:commentmakerService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.dogSvc.GetCurrentUser())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/Login']);
      return false;
    }
  }
}

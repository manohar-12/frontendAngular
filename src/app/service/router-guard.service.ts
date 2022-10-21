import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginserviceService } from './login/loginservice.service';

@Injectable({
  providedIn: 'root',
})
export class RouterGuardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginser.isuserlogedin()) return true;

    return false;
  }
  constructor(private loginser: LoginserviceService) {}
}

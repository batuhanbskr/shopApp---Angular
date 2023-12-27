import { Injectable } from "@angular/core";
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Authservice } from "../model/auth.service";
import { Observable } from "rxjs";

@Injectable()

export class AuthGuard  implements CanActivate{
    constructor(private router: Router, private authService: Authservice){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(!this.authService.authenticated){
            this.router.navigateByUrl('/admin/auth')
            return false;
        }
        return true;
    }
}
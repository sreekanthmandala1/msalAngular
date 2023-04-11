import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsalGuard {

  constructor(private msalService: MsalService) {
  }

  canActivate(): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.msalService.instance.getActiveAccount() == null){
      return false
    }
    return true
  }
}

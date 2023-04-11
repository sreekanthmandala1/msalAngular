import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { PublicPageComponent } from './components/public-page/public-page.component';
import { RestrictedPageComponent } from './components/restricted-page/restricted-page.component';

export function MSALInstanceFactory():IPublicClientApplication | null{
  return new PublicClientApplication({
    auth:{
      clientId : 'd1c596df-abca-43cb-8951-4207a18c568b',
      redirectUri : 'http://localhost:4200'
    }
  })
}
@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    RestrictedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    {
      provide : MSAL_INSTANCE,
      useFactory : MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

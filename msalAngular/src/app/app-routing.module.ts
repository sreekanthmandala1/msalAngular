import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicPageComponent } from './components/public-page/public-page.component';
import { RestrictedPageComponent } from './components/restricted-page/restricted-page.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
  {
    path : 'publicPage' , component : PublicPageComponent
  },
  {
    path : 'restrictedPage' , component : RestrictedPageComponent
  },
  {
    path : '**' , component : PublicPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

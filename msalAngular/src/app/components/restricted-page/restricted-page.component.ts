import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-restricted-page',
  templateUrl: './restricted-page.component.html',
  styleUrls: ['./restricted-page.component.scss']
})
export class RestrictedPageComponent implements OnInit {
  public profilePicture?: SafeResourceUrl;

  constructor(private msalService: MsalService, private readonly _http: HttpClient, private readonly _domsanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }
}

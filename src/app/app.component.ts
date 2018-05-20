import { Component } from '@angular/core';

const { version: appVersion } = require('../../package.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public version: string;
  title = 'app';
  public constructor() {
    this.version = appVersion;
  }
  public getRigInfo(): void {
    
  }
}

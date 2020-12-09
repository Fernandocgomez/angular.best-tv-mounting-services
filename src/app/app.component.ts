import { Component } from '@angular/core';
import { AppConfig } from './models/app-config.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'best-tv-mounting-services';
  constructor(private appConfig: AppConfig) {
    console.log("fernando", this.appConfig.API_BASE_URL)
  }
}

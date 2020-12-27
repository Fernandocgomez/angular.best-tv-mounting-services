// Angular modules
import { Component } from '@angular/core';
// Models
import { AppConfig } from './models/app-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appConfig: AppConfig) {}
}

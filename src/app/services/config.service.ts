import { Injectable } from '@angular/core';
import { AppConfig } from "../models/app-config.model";
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends AppConfig {

  constructor(private http: HttpClient) { 
    super();
  }

  // This function needs to return a promise
  load() {
    return this.http.get<AppConfig>('../../assets/config/config.json')
      .toPromise()
      .then((data:AppConfig) => {
        this.API_BASE_URL = data.API_BASE_URL
      })
      .catch(() => {
        console.error('Could not load configuration');
      });
  }
}
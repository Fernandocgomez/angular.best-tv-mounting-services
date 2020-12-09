// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
// Services
import { ConfigService } from './services/config.service';
// Models
import { AppConfig } from './models/app-config.models';

export function initializerFn(configService: ConfigService) {
  return () => {
    return configService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: AppConfig,
      deps: [HttpClient],
      useExisting: ConfigService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: initializerFn
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

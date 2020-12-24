// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
// Services
import { ConfigService } from './services/config.service';
import { HomeService } from './services/home.service';
// Models
import { AppConfig } from './models/app-config.model';
import { FeatureComponent } from './components/feature/feature.component';
import { ParallaxScrollingComponent } from './components/parallax-scrolling/parallax-scrolling.component';

export function initializerFn(configService: ConfigService) {
  return () => {
    return configService.load();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroComponent,
    FeatureComponent,
    ParallaxScrollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
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
    },
    HomeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

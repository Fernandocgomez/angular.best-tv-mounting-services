// Angular Modules
import { Component, Input, OnInit } from '@angular/core';
// Models
import { ParallaxScrollingSection } from 'src/app/models/parallax-scrolling-section.model';

@Component({
  selector: 'app-parallax-scrolling',
  templateUrl: './parallax-scrolling.component.html',
  styleUrls: ['./parallax-scrolling.component.scss']
})
export class ParallaxScrollingComponent implements OnInit {
  // Private properties
  
  // Public properties
  @Input() public parallaxScrollingData?: ParallaxScrollingSection;

  constructor() { }

  // Life cycle methods
  ngOnInit(): void {

  }

  // Private methods

  // Public methods

}

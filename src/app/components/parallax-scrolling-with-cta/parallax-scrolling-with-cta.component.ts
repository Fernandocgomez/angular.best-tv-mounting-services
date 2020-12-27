// Angular modules
import { Component, Input, OnInit } from '@angular/core';
// Models
import { ParallaxScrollingWithCtaSection } from './../../models/parallax-scrolling-with-cta-section.model';

@Component({
  selector: 'app-parallax-scrolling-with-cta',
  templateUrl: './parallax-scrolling-with-cta.component.html',
  styleUrls: ['./parallax-scrolling-with-cta.component.scss']
})
export class ParallaxScrollingWithCtaComponent implements OnInit {
  // Private properties
  
  // Public properties
  @Input() public parallaxScrollingWithCtaSectionData?: ParallaxScrollingWithCtaSection;

  constructor() { }

  // Life cycle methods
  ngOnInit(): void {

  }

  // Private methods

  // Public methods
}

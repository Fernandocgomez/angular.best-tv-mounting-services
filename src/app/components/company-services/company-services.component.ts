// Angular modules
import { Component, OnInit, Input } from '@angular/core';
// Models
import { CompanyServiceItemSection } from './../../models/company-service-item-section.model';
import { CompanyServiceSection } from './../../models/company-service-section.model';

@Component({
  selector: 'app-company-services',
  templateUrl: './company-services.component.html',
  styleUrls: ['./company-services.component.scss']
})
export class CompanyServicesComponent implements OnInit {
  // Private properties

  // Public properties
  @Input() public companyServiceSectionData?: CompanyServiceSection;
  @Input() public companyServiceItemSectionData?: Array<CompanyServiceItemSection>;
  
  constructor() { }

  // Life cycle methods
  ngOnInit(): void {
  }

  // Private methods

  // Public methods

}

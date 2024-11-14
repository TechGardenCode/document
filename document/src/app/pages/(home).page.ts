import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'document-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <document-analog-welcome/>
  `,
})
export default class HomeComponent {
}

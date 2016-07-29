import { Component } from '@angular/core';

import { MaterializeDirective } from 'angular2-materialize';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [
    MaterializeDirective
  ],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

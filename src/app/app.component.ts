import { Component } from '@angular/core';

declare var window: any & Window;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobilestore';

  // ngOnInit() {    
  //   var user = null;
  //   if (user = localStorage.getItem('user'))
  //     window.user = JSON.parse(user);
  // }
}

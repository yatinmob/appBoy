import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
declare const AppboyPlugin: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly platform: Platform,
  ) {
    this.platform.ready().then(() => {
      alert(0);
      debugger;
      AppboyPlugin.startSessionTracking();
      AppboyPlugin.changeUser('aa965420-b22a-11e9-84ba-e7271af1e734');
      AppboyPlugin.setEmail('ypatel@mobiquityinc.com');
      AppboyPlugin.setFirstName('Yatin');
      AppboyPlugin.setLastName('Patel');
    });
  }
}

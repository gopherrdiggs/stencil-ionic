import { Component, h } from "@stencil/core";

@Component({
  tag: 'app-settings'
})
export class AppSettings {

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot='end'>
            <ion-button href={'/'}>Home</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content class='ion-padding'>
        <p>Nothing really here on the settings screen.</p>
      </ion-content>
    ]
  }
}
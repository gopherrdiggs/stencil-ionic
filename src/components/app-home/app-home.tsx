import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home'
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons>
            <ion-button href={'/'}>Home</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-card>
          <ion-card-header>Test Card</ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-label>Field</ion-label>
              <ion-input></ion-input>
            </ion-item>
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}

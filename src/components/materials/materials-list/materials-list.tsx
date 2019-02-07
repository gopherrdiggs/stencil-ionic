import { Component } from "@stencil/core";

@Component({
  tag: 'materials-list'
})
export class MaterialsList {

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>Materials</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-grid>
          <ion-row>
            <ion-col size='8'>
              <ion-item>Left</ion-item>
            </ion-col>
            <ion-col size='4'>
              <ion-item>Right</ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
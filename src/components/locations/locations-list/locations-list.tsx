import { Component } from "@stencil/core";

@Component({
  tag: 'locations-list',
  styleUrl: 'locations-list.css'
})
export class LocationsList {

  render() {
    return [
      <ion-header>
        <ion-toolbar color='secondary'>
          <ion-title slot='start'>Locations</ion-title>
        </ion-toolbar>
        <ion-toolbar color='tertiary'>
          <ion-button fill='outline' class='button-toolbar-worded'>Create</ion-button>
          <ion-button slot='end' fill='clear'>
            <ion-icon slot='icon-only' name='more'></ion-icon>
          </ion-button>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-list>
          <ion-item href='/locations/0001'>Site 1</ion-item>
          <ion-item href='/locations/0002'>Site 2</ion-item>
          <ion-item href='/locations/0003'>Yard 1</ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
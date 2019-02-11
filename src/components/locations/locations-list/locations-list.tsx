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
          <ion-buttons slot='end'>
            <ion-button slot='end' shape='round' fill='solid'>
              <ion-icon slot='icon-only' name='person' color='secondary'></ion-icon>
            </ion-button>
          </ion-buttons>
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
          <ion-item href='/locations/0001'>
            <ion-label>
              Site 1
              <h4 class='field-label'>Parent location: None</h4>
            </ion-label>
          </ion-item>
          <ion-item href='/locations/0002'>
            <ion-label>
              Site 2
              <h4 class='field-label'>Parent location: None</h4>
            </ion-label>
          </ion-item>
          <ion-item href='/locations/0003'>
            <ion-label>
              Yard 1
              <h4 class='field-label'>Parent location: Site 1</h4>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
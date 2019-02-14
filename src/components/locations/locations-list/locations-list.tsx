import { Component } from "@stencil/core";

@Component({
  tag: 'locations-list',
  styleUrl: 'locations-list.css'
})
export class LocationsList {

  render() {
    return [
      <app-header header-title='Locations'>
        <app-subheader slot='secondary-toolbar'
                       hasCreate
                      moreMenuComponent=''/>
      </app-header>,
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
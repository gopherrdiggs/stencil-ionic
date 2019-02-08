import { Component } from "@stencil/core";

@Component({
  tag: 'location-detail',
  styleUrl: 'location-detail.css'
})
export class LocationDetail {

  render() {
    return [
      <ion-header>
        <ion-toolbar color='secondary'>
          <ion-title>Locations</ion-title>
          <ion-buttons slot='end'>
            <ion-button slot='end' shape='round' fill='solid'>
              <ion-icon slot='icon-only' name='person' color='secondary'></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-toolbar color='tertiary'>
          <ion-title>Site 1</ion-title>
          {/* <ion-buttons slot='end'>
            <ion-button slot='end' fill='outline' color='primary'>Save Changes</ion-button>
            <ion-button slot='end' fill='clear' color='primary'>Cancel</ion-button>
          </ion-buttons> */}
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-grid no-padding id='locationFieldsGrid'>
          <ion-row no-padding id='locationDetail-row1'>
            <ion-col no-padding size='4'>

              <ion-card color='tertiary'>
                <ion-card-header no-padding color='tertiary'>
                  <ion-toolbar no-padding color='tertiary'>
                    <ion-title slot='start' class='card-header-title'>Location Detail</ion-title>
                    <ion-buttons slot='end'>
                      <ion-button slot='end' class='card-header-button-edit'>
                        <ion-icon slot='icon-only' name='create'></ion-icon>
                      </ion-button>
                    </ion-buttons>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content color='tertiary'>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Name</ion-label>
                    <ion-input>Site 1</ion-input>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Parent Location</ion-label>
                    <ion-input>None</ion-input>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Geolocation</ion-label>
                    <ion-select value='inherit'>
                      <ion-select-option value='inherit'>Inherit from parent</ion-select-option>
                      <ion-select-option value='polygon'>Polygon/Area</ion-select-option>
                      <ion-select-option value='point'>Single Point</ion-select-option>
                    </ion-select>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Information</ion-label>
                    <ion-input><i>Populate the list below by clicking on the map and selecting the points of the polygon.</i></ion-input>
                  </ion-item>
                  <ion-list no-padding color='tertiary'>
                    <ion-list-header color='tertiary' class='field-label'>
                      <ion-label>Coordinates</ion-label>
                    </ion-list-header>
                    <ion-item color='tertiary'>
                      <ion-button fill='outline'>
                        Reset
                      </ion-button>
                    </ion-item>
                    <ion-item color='tertiary'>84.23598, -37.23987</ion-item>
                    <ion-item color='tertiary'>84.23600, -37.23703</ion-item>
                  </ion-list>
                </ion-card-content>
              </ion-card>

            </ion-col>
            <ion-col no-padding size='8'>
            
              <ion-card color='tertiary'>
                <ion-card-header no-padding color='tertiary'>
                  <ion-toolbar no-padding color='tertiary'>
                    <ion-title slot='start' class='card-header-title'>Location Map</ion-title>
                    <ion-buttons slot='end'>
                      <ion-button slot='end' class='card-header-button-edit'>
                        <ion-icon slot='icon-only' name='more'></ion-icon>
                      </ion-button>
                    </ion-buttons>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content color='tertiary'>
                  <img src="/assets/images/map002.png" height={770} alt="map"/>
                </ion-card-content>
              </ion-card>

            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
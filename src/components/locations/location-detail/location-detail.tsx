import { Component, Listen, State } from "@stencil/core";

@Component({
  tag: 'location-detail',
  styleUrl: 'location-detail.css'
})
export class LocationDetail {

  @State() geolocationType: string = 'inherit';

  @Listen('ionChange')
  handleIonChange(event: any) {

    // if (!event || !event.detail || !event.detail.value) {
    //   return;
    // }
    
    console.log('ionChange event: ', event);

    this.geolocationType = event.detail.value;
  }

  renderGeolocationType() {

    console.log('rendering geolocation type ');
    
    if (this.geolocationType === 'inherit') {
      return [
        <ion-item color='tertiary'>
          <ion-label class='field-label'>
            <h2>Coordinates inherited from parent.</h2>
          </ion-label>
        </ion-item>
      ];
    }
    else if (this.geolocationType === 'polygon') {
      return [
        <ion-list no-padding color='tertiary'>
          <ion-list-header color='tertiary' class='field-label'>
            <ion-label>
              <h2 class='field-label field-label-header'>Polygon/Area Coordinates</h2>
              <h4 class='field-label'><i>Populate the list below by clicking on the map and selecting the points of the polygon.</i></h4>
            </ion-label>
          </ion-list-header>
          <ion-item color='tertiary'>
            <ion-button fill='outline'>
              Clear List
            </ion-button>
          </ion-item>
          <ion-item color='tertiary'>84.23598, -37.23987</ion-item>
          <ion-item color='tertiary'>84.23600, -37.23703</ion-item>
        </ion-list>
      ]
    }
    else if (this.geolocationType === 'point') {
      return [
        <ion-item color='tertiary'>
          <ion-label>
            <h2 class='field-label field-label-header'>Point Coordinates</h2>
            <h4 class='field-label'>Optionally select coordinates by clicking on the map.</h4>
          </ion-label>
        </ion-item>,
        <ion-item color='tertiary'>
          <ion-label position='stacked' class='field-label'>Latitude</ion-label>
          <ion-input></ion-input>
        </ion-item>,
        <ion-item color='tertiary'>
          <ion-label position='stacked' class='field-label'>Longitude</ion-label>
          <ion-input></ion-input>
        </ion-item>
      ]
    }
  }

  render() {
    return [
      <app-header header-title='Locations'>
        <ion-toolbar slot='secondary-toolbar' color='tertiary'>
          <ion-title>Site 1</ion-title>
          {/* <ion-buttons slot='end'>
            <ion-button slot='end' fill='outline' color='primary'>Save Changes</ion-button>
            <ion-button slot='end' fill='clear' color='primary'>Cancel</ion-button>
          </ion-buttons> */}
        </ion-toolbar>
      </app-header>,
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
                    <ion-select value={ this.geolocationType }>
                      <ion-select-option value='inherit'>Inherit from parent</ion-select-option>
                      <ion-select-option value='polygon'>Polygon/Area</ion-select-option>
                      <ion-select-option value='point'>Single Point</ion-select-option>
                    </ion-select>
                  </ion-item>

                  { this.renderGeolocationType() }

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
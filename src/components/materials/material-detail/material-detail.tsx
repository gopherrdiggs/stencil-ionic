import { Component } from "@stencil/core";

@Component({
  tag: 'material-detail',
  styleUrl: 'material-detail.css'
})
export class MaterialDetail {

  render() {
    return [
      <ion-header>
        <ion-toolbar color='secondary'>
          <ion-title>Materials</ion-title>
          <ion-buttons slot='end'>
            <ion-button slot='end' shape='round' fill='solid'>
              <ion-icon slot='icon-only' name='person' color='secondary'></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-toolbar color='tertiary'>
          <ion-title>PIPE-001</ion-title>
          {/* <ion-buttons slot='end'>
            <ion-button slot='end' fill='outline' color='primary'>Save Changes</ion-button>
            <ion-button slot='end' fill='clear' color='primary'>Cancel</ion-button>
          </ion-buttons> */}
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-grid no-padding id='materialFieldsGrid'>
          <ion-row no-padding id='materialDetail-row1'>
            <ion-col no-padding sizeLg='4' sizeXs='12'>
              <ion-card color='tertiary'>
                <ion-card-content>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Current Status</ion-label>
                    <ion-input>Inventory</ion-input>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Statused Via</ion-label>
                    <ion-input>Automated Zone Rule</ion-input>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Statused On</ion-label>
                    <ion-input>14 Jan 2019</ion-input>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Previous Status</ion-label>
                    <ion-input>In Transit</ion-input>
                  </ion-item>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col no-padding sizeLg='4' sizeXs='12'>
              <ion-card color='tertiary'>
                <ion-card-content>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Description</ion-label>
                    <ion-input>Spool w/ T - Flanged - 12.5 x 8.25</ion-input>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <img src="/assets/images/spool001.png" height={197} alt="thumbnail"/>
                  </ion-item>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col no-padding sizeLg='4' sizeXs='12'>
              <ion-card color='tertiary'>
                <ion-card-content>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Location</ion-label>
                    <ion-input>Yard 1 / Zone B-3</ion-input>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='share-alt'></ion-icon>
                    </ion-button>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <img src="/assets/images/map001.png" height={197} alt="thumbnail"/>
                  </ion-item>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
          <ion-row no-padding id='materialDetail-row2'>
            <ion-col no-padding sizeLg='8' sizeXs='12'>

              <ion-card color='tertiary'>
                <ion-card-header no-padding color='tertiary'>
                  <ion-toolbar no-padding color='tertiary'>
                    <ion-title slot='start' class='card-header-title'>Catalog Item Detail</ion-title>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Name</ion-label>
                    <ion-input>PIPE-001</ion-input>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='share-alt'></ion-icon>
                    </ion-button>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Storage Requirements</ion-label>
                    <ion-input>Not too hot, not too cold</ion-input>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Safety Classification</ion-label>
                    <ion-input>A51</ion-input>
                  </ion-item>
                  <ion-grid no-padding>
                    <ion-row no-padding>
                      <ion-col no-padding size='6'>
                        <ion-item color='tertiary'>
                          <ion-label position='stacked' class='field-label'>Length</ion-label>
                          <ion-input>12.5</ion-input>
                        </ion-item>
                      </ion-col>
                      <ion-col no-padding size='6'>
                        <ion-item color='tertiary'>
                          <ion-label position='stacked' class='field-label'>Width</ion-label>
                          <ion-input>8.25</ion-input>
                        </ion-item>
                      </ion-col>
                    </ion-row>
                    <ion-row no-padding>
                      <ion-col no-padding size='6'>
                        <ion-item color='tertiary'>
                          <ion-label position='stacked' class='field-label'>Height</ion-label>
                          <ion-input>4.75</ion-input>
                        </ion-item>
                      </ion-col>
                      <ion-col no-padding size='6'>
                        <ion-item color='tertiary'>
                          <ion-label position='stacked' class='field-label'>Weight</ion-label>
                          <ion-input>28 lbs</ion-input>
                        </ion-item>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-content>
              </ion-card>

              <ion-card color='tertiary'>
                <ion-card-header no-padding color='tertiary'>
                  <ion-toolbar no-padding color='tertiary'>
                    <ion-title slot='start' class='card-header-title'>Material Detail</ion-title>
                    <ion-buttons slot='end'>
                      <ion-button slot='end' class='card-header-button-edit'>
                        <ion-icon slot='icon-only' name='create'></ion-icon>
                      </ion-button>
                    </ion-buttons>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content color='tertiary'>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Heat Number</ion-label>
                    <ion-input>HEAT-293823</ion-input>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Serial Number</ion-label>
                    <ion-input>DHK987398-9125</ion-input>
                  </ion-item>
                </ion-card-content>
              </ion-card>

              <ion-card color='tertiary'>
                <ion-card-header no-padding color='tertiary'>
                  <ion-toolbar no-padding color='tertiary'>
                    <ion-title class='card-header-title'>Related Entities of Type N</ion-title>
                    <ion-buttons slot='end'>
                      <ion-button shape='round' color='primary'>
                        <ion-icon slot='icon-only' name='add-circle'></ion-icon>
                      </ion-button>
                    </ion-buttons>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Related Entity Type</ion-label>
                    <ion-input>Related Entity Name</ion-input>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='share-alt'></ion-icon>
                    </ion-button>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                </ion-card-content>
              </ion-card>

            </ion-col>
            <ion-col no-padding sizeLg='4' sizeXs='12'>
            
              <ion-card color='tertiary'>
                <ion-card-header color='tertiary' no-padding>
                  <ion-toolbar no-padding color='tertiary'>
                    <ion-title class='card-header-title'>Auto-Identifiers</ion-title>
                    <ion-buttons slot='end'>
                      <ion-button shape='round' color='primary'>
                        <ion-icon slot='icon-only' name='add-circle'></ion-icon>
                      </ion-button>
                    </ion-buttons>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content color='tertiary'>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Barcode</ion-label>
                    <ion-input>09375982375987</ion-input>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='share-alt'></ion-icon>
                    </ion-button>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>RFID Tag</ion-label>
                    <ion-input>AGH-2309735</ion-input>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='share-alt'></ion-icon>
                    </ion-button>
                    <ion-button slot='end' fill='clear' color='light' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                </ion-card-content>
              </ion-card>

              <ion-card color='tertiary'>
                <ion-card-header no-padding color='tertiary'>
                  <ion-toolbar no-padding color='tertiary'>
                    <ion-title slot='start' class='card-header-title'>People &amp; Dates</ion-title>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content color='tertiary'>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Received</ion-label>
                    <ion-input>13 Jan 2018</ion-input>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Received By</ion-label>
                    <ion-input>Marvin Smelley</ion-input>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Inspected</ion-label>
                    <ion-input>15 Jan 2018</ion-input>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Inspected By</ion-label>
                    <ion-input>John Peebles</ion-input>
                  </ion-item>
                </ion-card-content>
              </ion-card>

            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
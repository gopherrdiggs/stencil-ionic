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
        </ion-toolbar>
        <ion-toolbar color='tertiary'>
          <ion-title>PIPE-001</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-grid id='materialFieldsGrid'>
          <ion-row id='materialFieldsGrid-mainRow'>
            <ion-col size='8'>

              <ion-card color='tertiary'>
                <ion-card-content>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Catalog Item Name</ion-label>
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
                </ion-card-content>
              </ion-card>

              <ion-card color='tertiary'>
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
                    <ion-title>Section Header</ion-title>
                    <ion-buttons slot='end'>
                      <ion-button shape='round' color='primary'>
                        <ion-icon slot='icon-only' name='add-circle'></ion-icon>
                      </ion-button>
                    </ion-buttons>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Some Field</ion-label>
                    <ion-input>Field Value</ion-input>
                  </ion-item>
                </ion-card-content>
              </ion-card>

            </ion-col>
            <ion-col size='4'>
            
              <ion-card color='tertiary'>
                <ion-card-content color='tertiary'>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Received</ion-label>
                    <ion-input>13 Jan 2018</ion-input>
                  </ion-item>
                  <ion-item color='tertiary'>
                    <ion-label position='stacked' class='field-label'>Received By</ion-label>
                    <ion-input>Marvin Smelley</ion-input>
                  </ion-item>
                </ion-card-content>
              </ion-card>

              <ion-card color='tertiary'>
                <ion-card-header color='tertiary' no-padding>
                  <ion-toolbar no-padding color='tertiary'>
                    <ion-title>Auto-Identifiers</ion-title>
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

            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
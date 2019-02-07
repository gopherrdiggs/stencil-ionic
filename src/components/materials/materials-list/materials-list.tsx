import { Component } from "@stencil/core";

@Component({
  tag: 'materials-list',
  styleUrl: 'materials-list.css'
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
        <ion-grid id='materialsListGrid'>
          <ion-row id='materialsListGrid-mainRow'>
            <ion-col size='8'>

              <ion-card>
                <ion-card-content>
                  <ion-item>
                    <ion-label position='stacked'>Catalog Item Name</ion-label>
                    <ion-input>PIPE-001</ion-input>
                    <ion-button slot='end' fill='clear' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='share-alt'></ion-icon>
                    </ion-button>
                    <ion-button slot='end' fill='clear' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                  <ion-item>
                    <ion-label position='stacked'>Storage Requirements</ion-label>
                    <ion-input>Not too hot, not too cold</ion-input>
                  </ion-item>
                </ion-card-content>
              </ion-card>

              <ion-card>
                <ion-card-content>
                  <ion-item>
                    <ion-label position='stacked'>Heat Number</ion-label>
                    <ion-input>HEAT-293823</ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position='stacked'>Serial Number</ion-label>
                    <ion-input>DHK987398-9125</ion-input>
                  </ion-item>
                </ion-card-content>
              </ion-card>

              <ion-card>
                <ion-card-header>
                  <ion-toolbar no-padding>
                    <ion-title>Section Header</ion-title>
                    <ion-buttons slot='end'>
                      <ion-button shape='round'>
                        <ion-icon slot='icon-only' name='add-circle'></ion-icon>
                      </ion-button>
                    </ion-buttons>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content>
                  <ion-item>
                    <ion-label position='stacked'>Some Field</ion-label>
                    <ion-input>Field Value</ion-input>
                  </ion-item>
                </ion-card-content>
              </ion-card>

            </ion-col>
            <ion-col size='4'>
            
              <ion-card>
                <ion-card-content>

                  <ion-item>
                    <ion-label position='stacked'>Received</ion-label>
                    <ion-input>13 Jan 2018</ion-input>
                  </ion-item>
                  
                  <ion-item>
                    <ion-label position='stacked'>Received By</ion-label>
                    <ion-input>Marvin Smelley</ion-input>
                  </ion-item>
                  
                </ion-card-content>
              </ion-card>

              <ion-card>
                <ion-card-header>
                  <ion-toolbar no-padding>
                    <ion-title>Auto-Identifiers</ion-title>
                    <ion-buttons slot='end'>
                      <ion-button shape='round'>
                        <ion-icon slot='icon-only' name='add-circle'></ion-icon>
                      </ion-button>
                    </ion-buttons>
                  </ion-toolbar>
                </ion-card-header>
                <ion-card-content>
                  <ion-item>
                    <ion-label position='stacked'>Barcode</ion-label>
                    <ion-input>09375982375987</ion-input>
                    <ion-button slot='end' fill='clear' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='share-alt'></ion-icon>
                    </ion-button>
                    <ion-button slot='end' fill='clear' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='more'></ion-icon>
                    </ion-button>
                  </ion-item>
                  <ion-item>
                    <ion-label position='stacked'>RFID Tag</ion-label>
                    <ion-input>AGH-2309735</ion-input>
                    <ion-button slot='end' fill='clear' no-padding class='item-buttons-tight'>
                      <ion-icon slot='icon-only' name='share-alt'></ion-icon>
                    </ion-button>
                    <ion-button slot='end' fill='clear' no-padding class='item-buttons-tight'>
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
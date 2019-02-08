import { Component } from "@stencil/core";

@Component({
  tag: 'materials-list',
  styleUrl: 'materials-list.css'
})
export class MaterialsList {

  render() {
    return [
      <ion-header>
        <ion-toolbar color='secondary'>
          <ion-title slot='start'>Materials</ion-title>
        </ion-toolbar>
        <ion-toolbar color='tertiary'>
          <ion-button fill='outline' class='button-toolbar-worded'>Create</ion-button>
          <ion-button fill='outline' class='button-toolbar-worded'>Bulk Update</ion-button>
          <ion-button slot='end' fill='clear'>
            <ion-icon slot='icon-only' name='more'></ion-icon>
          </ion-button>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-list>
          <ion-item href='/materials/0002'>PIPE-0001</ion-item>
          <ion-item href='/materials/0002'>PIPE-0002</ion-item>
          <ion-item href='/materials/0003'>PIPE-0003</ion-item>
          <ion-item href='/materials/0001'>PIPE-0001</ion-item>
          <ion-item href='/materials/0002'>PIPE-0002</ion-item>
          <ion-item href='/materials/0003'>PIPE-0003</ion-item>
          <ion-item href='/materials/0001'>PIPE-0001</ion-item>
          <ion-item href='/materials/0002'>PIPE-0002</ion-item>
          <ion-item href='/materials/0003'>PIPE-0003</ion-item>
          <ion-item href='/materials/0001'>PIPE-0001</ion-item>
          <ion-item href='/materials/0002'>PIPE-0002</ion-item>
          <ion-item href='/materials/0003'>PIPE-0003</ion-item>
          <ion-item href='/materials/0001'>PIPE-0001</ion-item>
          <ion-item href='/materials/0002'>PIPE-0002</ion-item>
          <ion-item href='/materials/0003'>PIPE-0003</ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
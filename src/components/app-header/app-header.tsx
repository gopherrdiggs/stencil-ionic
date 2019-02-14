import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css'
})
export class AppHeader {

  @Prop() headerTitle = 'Jovix';

  render() {
    return [
      <ion-header>
        <ion-toolbar color='secondary'>
          <ion-title>{ this.headerTitle }</ion-title>
          <ion-buttons slot='end'>
            <ion-button id='user-profile-button' slot='end' shape='round' 
                        fill='solid'>
              <ion-icon slot='icon-only' name='person' 
                        color='secondary'></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        <slot name='secondary-toolbar' />
      </ion-header>
    ];
  }
}
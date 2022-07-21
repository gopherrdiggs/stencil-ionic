import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home'
})
export class AppHome {

  @State() fieldValue: string = '';

  async componentWillLoad() {
    this.fieldValue = 'Starting value';
  }

  async handleButtonClicked() {
    const newVal = new Date().toLocaleTimeString();
    console.log('Updating value...', newVal)
    this.fieldValue = newVal;
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Stencil/Ionic</ion-title>
          <ion-buttons slot='end'>
            <ion-button href={'/settings'}>Settings</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-card>
          <ion-card-header>Clicking 'Update Field' should update the value of the input field</ion-card-header>
          <ion-card-content>
            <ion-button onClick={()=>this.handleButtonClicked()}>
              Update Field Value
            </ion-button>
            <ion-item>
              <ion-label color='medium'>Field</ion-label>
              <ion-input type='text' value={this.fieldValue} clear-input />
            </ion-item>
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}

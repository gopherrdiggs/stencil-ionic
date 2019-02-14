import { Component, State } from "@stencil/core";

@Component({
  tag: 'materials-list',
  styleUrl: 'materials-list.css'
})
export class MaterialsList {

  @State() viewportLg: boolean = true;

  componentDidLoad() {

    let mmLg = window.matchMedia('(max-width: 700px)');
    this.handleViewportLgChange(mmLg);
    mmLg.addListener(this.handleViewportLgChange);
  }

  handleViewportLgChange(event: any) {

    this.viewportLg = !event.matches;
    if (this.viewportLg) {
      console.log('Lg now');
    }
    else {
      console.log('Not Lg');
    }
  }



  render() {
    return [
      <app-header header-title='Materials'>
        <app-subheader slot='secondary-toolbar' hasCreate={ this.viewportLg }
                       moreMenuComponent='materials-list-more-popover' />
      </app-header>,
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
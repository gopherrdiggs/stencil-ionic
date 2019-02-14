import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'app-subheader',
  styleUrl: 'app-subheader.css'
})
export class AppSubheader {

  @Prop() hasTitle: boolean = false;
  @Prop() hasCreate: boolean = false;
  @Prop() subheaderTitle: string = '';
  @Prop() moreMenuComponent: string = '';

  async handleMoreClick(event: any) {
    const popoverController = document.querySelector('ion-popover-controller');
    await popoverController.componentOnReady();

    const popoverElement = await popoverController.create({
      component: this.moreMenuComponent,
      event: event
    });

    return await popoverElement.present();
  }

  render() {
    return [
      <ion-toolbar color='tertiary'>
        { this.hasTitle 
          ? <ion-title slot='start'>{ this.subheaderTitle }</ion-title> 
          : <div /> }
        { this.hasCreate 
          ? <ion-button id='createBtn' slot='start' fill='outline' 
                        class='button-toolbar-worded'>Create</ion-button>
          : <div /> }
        <ion-button id='moreBtn' slot='end' fill='clear'
                    onClick={ (e)=> this.handleMoreClick(e) }>
          <ion-icon slot='icon-only' name='more'></ion-icon>
        </ion-button>
      </ion-toolbar>
    ];
  }
}
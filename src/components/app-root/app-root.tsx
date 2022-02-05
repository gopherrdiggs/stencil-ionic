import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root'
})
export class AppRoot {

  configureRoutes() {
    return [
      <ion-router useHash={false} >
        <ion-route-redirect from='/' to='/home' />
        <ion-route url="/home" component="app-home" />
      </ion-router>
    ]
  }

  render() {
    return (
      <ion-app>
        {this.configureRoutes()}
        <ion-nav id='menu' animated={false} />
      </ion-app>
    );
  }
}

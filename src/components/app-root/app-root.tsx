import { Component, h } from '@stencil/core';
import { HttpService } from '../../services/http';

@Component({
  tag: 'app-root'
})
export class AppRoot {

  async componentWillLoad() {
    await HttpService.setUrlBase('my.api.mockaroo.com/')
  }

  configureRoutes() {
    return [
      <ion-router useHash={false} >
        <ion-route-redirect from='/' to='/home' />
        <ion-route url="/home" component="app-home" />
        <ion-route url="/settings" component="app-settings" />
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

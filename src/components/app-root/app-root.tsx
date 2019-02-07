import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  configureRoutes() {
    return (
      <ion-router useHash={false}>
        <ion-route url="/" component="app-home" />
        <ion-route url='/materials' component='materials-list' />
      </ion-router>
    )
  }

  render() {
    return (
      <ion-app>
        { this.configureRoutes() }
        <ion-split-pane when='lg'>
          <ion-menu>
            <ion-header>
              <ion-toolbar color='primary'>
                <ion-title>Prototype</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list>
                <ion-select value='test' placeholder='Select a project'>
                  <ion-select-option value='test'>Test Project</ion-select-option>
                </ion-select>
                <ion-item disabled>WORKSPACES</ion-item>
                <ion-item>Locations</ion-item>
                <ion-item href='/materials'>Materials</ion-item>
                <ion-item>Material Types</ion-item>
              </ion-list>
            </ion-content>
            <ion-footer>
              <ion-toolbar>
                <ion-buttons>
                  <ion-button shape='round'>
                    <ion-icon slot='icon-only' name='settings'></ion-icon>
                  </ion-button>
                </ion-buttons>
              </ion-toolbar>
            </ion-footer>
          </ion-menu>
          <ion-nav main animated={false} />
        </ion-split-pane>
      </ion-app>
    );
  }
}

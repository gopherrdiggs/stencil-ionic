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
        <ion-route url='/locations' component='locations-list' />
        <ion-route url='/locations/:id' component='location-detail' />
        <ion-route url='/materials' component='materials-list' />
        <ion-route url='/materials/:id' component='material-detail' />
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
              <ion-toolbar color='secondary'>
                <img id='app-logo' src="/assets/images/jovix-logo.svg" height={25} alt="Jovix"/>
              </ion-toolbar>
              <ion-toolbar color='tertiary'>
                <ion-select value='test' 
                            placeholder='Select a project'>
                  <ion-select-option value='test'>Test Project</ion-select-option>
                </ion-select>
              </ion-toolbar>
            </ion-header>
            <ion-content>
              <ion-list no-padding>
                <ion-item>
                  <ion-label color='primary'>WORKSPACES</ion-label>
                </ion-item>
                <ion-item button href='/locations'>Locations</ion-item>
                <ion-item button>Material Types</ion-item>
                <ion-item button href='/materials'>Materials</ion-item>
              </ion-list>
            </ion-content>
            <ion-footer>
              <ion-toolbar>
                <ion-grid>
                  <ion-row>
                    <ion-col size='4'></ion-col>
                    <ion-col size='2'>
                      <ion-button shape='round' fill='solid' color='tertiary'>
                        <ion-icon slot='icon-only' name='settings'></ion-icon>
                      </ion-button>
                    </ion-col>
                    <ion-col size='5'></ion-col>
                  </ion-row>
                </ion-grid>
              </ion-toolbar>
            </ion-footer>
          </ion-menu>
          <ion-nav main animated={false} />
        </ion-split-pane>
      </ion-app>
    );
  }
}

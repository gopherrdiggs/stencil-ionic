import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  @State() menuContent: string = 'project';

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

  handleSettingsClick() {

    this.menuContent = 'admin';
  }

  handleHomeClick() {

    this.menuContent = 'project';
  }

  renderMenu() {

    if (this.menuContent === 'project') {
      return [
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
              <ion-item button>Material Types</ion-item>
              <ion-item button href='/materials'>Materials</ion-item>
              <ion-item></ion-item>
              <ion-item>
                <ion-label color='primary'>CONFIGURATION</ion-label>
              </ion-item>
              <ion-item button href='/locations'>Locations</ion-item>
              <ion-item button href='/statuses'>Statuses</ion-item>
            </ion-list>
          </ion-content>
          <ion-footer>
            <ion-toolbar>
              <ion-grid>
                <ion-row>
                  <ion-col size='4'></ion-col>
                  <ion-col size='4'>
                    <ion-button shape='round' fill='solid' color='tertiary'
                                onClick={ ()=> this.handleSettingsClick() }>
                      <ion-icon slot='icon-only' name='settings'></ion-icon>
                    </ion-button>
                  </ion-col>
                  <ion-col size='4'></ion-col>
                </ion-row>
              </ion-grid>
            </ion-toolbar>
          </ion-footer>
        </ion-menu>
      ];
    }
    else if (this.menuContent === 'admin') {
      return [
        <ion-menu>
          <ion-header>
            <ion-toolbar color='secondary'>
              <img id='app-logo' src="/assets/images/jovix-logo.svg" height={25} alt="Jovix"/>
            </ion-toolbar>
            <ion-toolbar color='tertiary'>
              <ion-title>Settings</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content>
            <ion-list no-padding>
              <ion-item button href='/groups'>Groups</ion-item>
              <ion-item button href='/material-types'>Projects</ion-item>
              <ion-item button href='/materials'>Roles</ion-item>
              <ion-item button href='/statuses'>Users</ion-item>
            </ion-list>
          </ion-content>
          <ion-footer>
            <ion-toolbar>
              <ion-grid>
                <ion-row>
                  <ion-col size='4'></ion-col>
                  <ion-col size='4'>
                    <ion-button shape='round' fill='solid' color='tertiary'
                                onClick={ ()=> this.handleHomeClick() }>
                      <ion-icon slot='icon-only' name='home'></ion-icon>
                    </ion-button>
                  </ion-col>
                  <ion-col size='4'></ion-col>
                </ion-row>
              </ion-grid>
            </ion-toolbar>
          </ion-footer>
        </ion-menu>
      ];
    }
  }

  render() {
    return (
      <ion-app>
        { this.configureRoutes() }

        <ion-split-pane when='lg'>
          { this.renderMenu() }
          <ion-nav main animated={false} />
        </ion-split-pane>
      </ion-app>
    );
  }
}

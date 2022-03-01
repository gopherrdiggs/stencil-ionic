import { Component, h, State } from '@stencil/core';
import { User } from '../../interfaces/application';
import { UsersService } from '../../services/users';

@Component({
  tag: 'app-home'
})
export class AppHome {

  @State() fieldValue: string = '';
  @State() users: User[] = [];

  async componentWillLoad() {
    this.users = await UsersService.getUsers();
  }

  async handleButtonClicked() {
    this.fieldValue = new Date().toLocaleTimeString();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>StencIonic</ion-title>
          <ion-buttons slot='end'>
            <ion-button href={'/settings'}>Settings</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-card>
          <ion-card-header>Click 'Update Field' to confirm state updates are working</ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-label color='medium'>Field</ion-label>
              <ion-input value={this.fieldValue} />
            </ion-item>
            <ion-button onClick={()=>this.handleButtonClicked()}>
              Update Field Value
            </ion-button>
          </ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-header>List of Users</ion-card-header>
          <ion-card-content>
            <ion-list>
              {this.users.map(user =>
                <ion-item>
                  <ion-label>{user.first_name} {user.last_name}</ion-label>
                </ion-item>  
              )}
            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}

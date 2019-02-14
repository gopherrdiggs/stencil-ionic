import { Component } from "@stencil/core";

@Component({
  tag: 'materials-list-more-popover'
})
export class MaterialsListMorePopover {

  render() {
    return [
      <ion-list>
        <ion-item>Option 1</ion-item>
        <ion-item>Option 2</ion-item>
      </ion-list>
    ];
  }
}
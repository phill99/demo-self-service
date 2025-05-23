import { Component } from '@angular/core';
import { PContainerComponent } from '@labb/angular-adapter';
import { PContainer } from '@labb/dx-engine';

@Component({
  selector: 'dx-group-container',
  template: `
      <h1 *ngIf="container.config.heading">{{container.config.heading}}</h1>
      <div *ngIf="container.config.instructions" [innerHtml]="container.config.instructions | translate"></div>
      <form class="dip-ext-grid-form">
        <ng-container *ngFor="let child of container.children; trackBy: trackByFn">
          <ng-template dxContainer [container]="child"></ng-template>
        </ng-container>
      </form>
  `,
  standalone: false
})
export class GroupComponent extends PContainerComponent {
  public trackByFn(index: number, item: PContainer): string {
    return item.componentName + '_' + item.id;
  }
}

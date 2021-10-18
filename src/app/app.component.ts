import { Component, ViewChild } from '@angular/core';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(PopupDialogComponent, { static: false }) public popupDialogComponent: PopupDialogComponent;

  public showDialog() {
    this.popupDialogComponent.showDialog();
  }
}

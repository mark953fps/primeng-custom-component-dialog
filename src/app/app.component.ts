import { Component, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import { PopupDialogService } from './popup-dialog/popup-dialog.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(PopupDialogComponent, { static: false }) public popupDialogComponent: PopupDialogComponent;

  constructor(private dialog: PopupDialogService) {}

  public showDialog() {
    this.popupDialogComponent.showDialog();

    this.dialog.dialogRef
    .pipe(take(2))
    .subscribe((data) => {
      console.log(data, 'data');
    });
  }
}

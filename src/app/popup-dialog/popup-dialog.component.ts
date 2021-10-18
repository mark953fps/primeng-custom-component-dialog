import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent {
  @Input() public display: boolean = false;

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
  }
}

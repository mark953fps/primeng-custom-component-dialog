import { Component, Input } from '@angular/core';
import { PopupDialogService } from './popup-dialog.service';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent {
  @Input() public display: boolean = false;

  constructor(private dialog: PopupDialogService) {}

  showDialog() {
    this.display = true;
    this.dialog.setDialog('');
  }

  onClickDialog(data: string = null): any {
    data === 'success' ? this.dialog.setDialog(true) : this.dialog.setDialog(false);
    this.display = false;
  }
}

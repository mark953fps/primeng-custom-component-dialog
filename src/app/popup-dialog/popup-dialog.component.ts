import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss'],
})
export class PopupDialogComponent implements OnInit {
  display: boolean = false;
  @Input() public visible: boolean;

  public ngOnInit() {}

  showDialog() {
    this.display = true;
  }

  closeDialog() {}
}

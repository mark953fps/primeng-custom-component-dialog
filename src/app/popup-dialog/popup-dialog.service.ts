import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupDialogService {
  private dialogData = new BehaviorSubject<any>(null);
  public dialogRef = this.dialogData.asObservable();

  public setDialog(data: any = null) {
    this.dialogData.next(data);
  }
}

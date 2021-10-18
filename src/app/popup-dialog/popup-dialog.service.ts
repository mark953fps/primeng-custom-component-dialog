import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PopupDialogService {
  private dialogData = new BehaviorSubject<any>('');
  public dialogRef = this.dialogData.asObservable();

  public setDialog(data: any) {
    this.dialogData.next(data);
  }
}

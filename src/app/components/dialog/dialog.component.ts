import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  // public dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  // public openDialog(): void {
  //  this.dialog()?.nativeElement.showModal();
  // }
}

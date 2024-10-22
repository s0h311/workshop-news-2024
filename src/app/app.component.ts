import { AfterViewInit, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { of } from "rxjs";
import { AsyncPipe, DatePipe } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, DatePipe],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  public userData = of({
    id: crypto.randomUUID(),
    name: "James",
    lastName: "Bond",
    birthDate: new Date(1999, 1, 1),
  });

  // public dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  // public openDialog(): void {
  //  this.dialog()?.nativeElement.showModal();
}

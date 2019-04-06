import { Component, ViewChild, ElementRef } from "@angular/core";
import { Input } from "./models/input";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  public title = "Testing autofocus in Angular 7";
  public subtitle = "For testing purposes";

  public myData: Input[] = [
    {
      id: 0,
      value: "Zyad",
      editing: false
    },
    {
      id: 1,
      value: "Refo",
      editing: false
    }
  ];

  public focuser(event): void {
    event.target.focus();
  }

  public initFocus(id): void {
    const controlledId = Number(id);

    // Disable other enabled elements
    this.myData
      .filter(item => item.id !== id)
      .map(item => (item.editing = false));
    this.myData[controlledId].editing = !this.myData[controlledId].editing;

    // Check if editing mode
    if (this.myData[controlledId].editing)
      // Make sure focus will happen after init of element
      setTimeout(() => {
        const input: HTMLInputElement = document.querySelector("input");
        input.focus();
      }, 0);
  }
}

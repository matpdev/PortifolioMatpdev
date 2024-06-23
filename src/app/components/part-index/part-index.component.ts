import { Component, Input } from "@angular/core";

@Component({
  selector: "app-part-index",
  standalone: true,
  imports: [],
  templateUrl: "./part-index.component.html",
  styleUrl: "./part-index.component.scss",
})
export class PartIndexComponent {
  @Input() index: string = "0";
  @Input() name: string = "";
}

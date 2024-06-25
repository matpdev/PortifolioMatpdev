import { Component } from "@angular/core";
import { PartIndexComponent } from "../../../parts/part-index/part-index.component";

@Component({
  selector: "app-zero-slide",
  standalone: true,
  imports: [PartIndexComponent],
  templateUrl: "./zero-slide.component.html",
  styleUrl: "./zero-slide.component.scss",
})
export class ZeroSlideComponent {}

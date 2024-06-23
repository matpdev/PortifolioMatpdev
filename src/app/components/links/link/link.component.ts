import { Component } from "@angular/core";
import { IconsModule } from "../../../modules/icons/icons.module";

@Component({
  selector: "app-link",
  standalone: true,
  imports: [IconsModule],
  templateUrl: "./link.component.html",
  styleUrl: "./link.component.scss",
})
export class LinkComponent {}

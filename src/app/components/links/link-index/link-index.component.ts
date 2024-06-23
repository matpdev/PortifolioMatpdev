import { Component, Input } from "@angular/core";
import { IconsModule } from "../../../modules/icons/icons.module";

@Component({
  selector: "app-link-index",
  standalone: true,
  imports: [IconsModule],
  templateUrl: "./link-index.component.html",
  styleUrl: "./link-index.component.scss",
})
export class LinkIndexComponent {
  @Input() linkWeb: string | null = null;
  @Input() linkGithub: string | null = null;
  @Input() linkLinkedinPost: string | null = null;
}

import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/parts/header/header.component";
import { LinkComponent } from "./components/links/link/link.component";
import { PresentationSlideComponent } from "./components/fragments/firstPage/presentation-slide/presentation-slide.component";
import { OneSlideComponent } from "./components/fragments/firstPage/one-slide/one-slide.component";
import { ZeroSlideComponent } from "./components/fragments/firstPage/zero-slide/zero-slide.component";
import { TwoSlideComponent } from "./components/fragments/firstPage/two-slide/two-slide.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LinkComponent,
    PresentationSlideComponent,
    OneSlideComponent,
    ZeroSlideComponent,
    TwoSlideComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "teste";
}

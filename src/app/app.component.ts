import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/parts/header/header.component";
import { LinkComponent } from "./components/links/link/link.component";
import { PresentationSlideComponent } from "./components/fragments/firstPage/presentation-slide/presentation-slide.component";
import { OneSlideComponent } from "./components/fragments/firstPage/one-slide/one-slide.component";
import { ZeroSlideComponent } from "./components/fragments/firstPage/zero-slide/zero-slide.component";
import { TwoSlideComponent } from "./components/fragments/firstPage/two-slide/two-slide.component";
import { NgxSplideModule } from "ngx-splide";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

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
    NgxSplideModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements AfterViewInit {
  @ViewChild("cursor") cursor?: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    try {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      gsap.set("#cursor_data", {
        xPercent: -50,
        yPercent: -50,
      });
      if (!!this?.cursor) {
        document.addEventListener("mousemove", (e) => {
          let x = e.clientX;
          let y = e.clientY;
          gsap.to("#cursor_data", 0.5, {
            x: x,
            y: y,
          });
        });
      }
    } catch (error) {}
  }
}

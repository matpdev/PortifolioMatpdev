import { isPlatformBrowser } from "@angular/common";
import { AfterViewInit, Component, Inject, PLATFORM_ID } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  isModalOpen = false;

  switchModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  ngAfterViewInit(): void {
    // gsap.registerPlugin(ScrollTrigger);
    // if (isPlatformBrowser(this.platformId)) {
    //   gsap.to(".header", {
    //     x: "52vw",
    //     y: "15vh",
    //     scale: 2.5,
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: ".header",
    //       start: "top 80%",
    //       // end: "top 40%",
    //       scrub: 1,
    //       markers: true,
    //     },
    //   });
    //   // gsap.to(".sublogo", {
    //   //   x: "-52vw",
    //   //   y: "15vh",
    //   //   scale: 2.5,
    //   //   rotate: 360,
    //   //   scrollTrigger: {
    //   //     trigger: ".sublogo",
    //   //     start: "top 80%",
    //   //     end: "top 40%",
    //   //     scrub: 1,
    //   //   },
    //   // });
    // }
  }
}

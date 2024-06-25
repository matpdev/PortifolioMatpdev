import {
  AfterViewChecked,
  Component,
  effect,
  Injector,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { map, takeWhile, timer } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { interval } from "rxjs";
import { NgxSplideComponent, NgxSplideModule } from "ngx-splide";

@Component({
  selector: "app-carrousel",
  standalone: true,
  imports: [NgxSplideModule],
  templateUrl: "./carrousel.component.html",
  styleUrl: "./carrousel.component.scss",
})
export class CarrouselComponent implements AfterViewChecked {
  @Input() images: string[] = [];
  @ViewChild("mainSplide") mainSplide?: NgxSplideComponent;

  ngAfterViewChecked(): void {
    // console.log(this.mainSplide.options);
  }
}

import { Component, OnInit } from "@angular/core";
import { PartIndexComponent } from "../../../part-index/part-index.component";
import { HttpClient } from "@angular/common/http";
import { RepoType } from "../../../../../types/types";

@Component({
  selector: "app-one-slide",
  standalone: true,
  imports: [PartIndexComponent],
  templateUrl: "./one-slide.component.html",
  styleUrl: "./one-slide.component.scss",
})
export class OneSlideComponent implements OnInit {
  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    await this.searchJobs();
  }

  selectables: RepoType[] = [];

  async searchJobs() {
    this.http
      .get<RepoType[]>(
        "https://raw.githubusercontent.com/matpdev/portifolio-files/master/indexOne.json"
      )
      .subscribe((e) => (this.selectables = e));
  }

  onClickSelectable(index: number) {
    for (let o = 0; o < this.selectables.length; o++) {
      this.selectables[o].isSelected = false;
    }
    this.selectables[index].isSelected = true;
  }

  getSelected(): RepoType | undefined {
    return this.selectables.find((e) => e.isSelected);
  }
}

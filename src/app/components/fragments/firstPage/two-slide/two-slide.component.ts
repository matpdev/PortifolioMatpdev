import { Component, OnInit } from "@angular/core";
import { PartIndexComponent } from "../../../part-index/part-index.component";
import { HttpClient } from "@angular/common/http";
import { RepoWorks } from "../../../../../types/types";
import { LinkIndexComponent } from "../../../links/link-index/link-index.component";

@Component({
  selector: "app-two-slide",
  standalone: true,
  imports: [PartIndexComponent, LinkIndexComponent],
  templateUrl: "./two-slide.component.html",
  styleUrl: "./two-slide.component.scss",
})
export class TwoSlideComponent implements OnInit {
  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    await this.searchJobs();
  }

  works: RepoWorks[][] = [];
  page: number = 0;

  async searchJobs() {
    this.http
      .get<RepoWorks[]>(
        "https://raw.githubusercontent.com/matpdev/portifolio-files/master/works.json"
      )
      .subscribe((e) => (this.works = this.paginate(e, 2)));
  }

  returnJsonString() {
    return JSON.stringify(this.works, null, 4);
  }

  decreasePage() {
    if (this.page > 0) {
      this.page--;
    }
  }
  increasePage() {
    if (this.page < this.works.length - 1) {
      this.page++;
    }
  }

  paginate(arr: any[], size: number) {
    return arr.reduce((acc, val, i) => {
      let idx = Math.floor(i / size);
      let page = acc[idx] || (acc[idx] = []);
      page.push(val);

      return acc;
    }, []);
  }

  imageSourceRotation() {}
}

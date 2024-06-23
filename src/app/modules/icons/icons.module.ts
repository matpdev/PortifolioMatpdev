import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatherModule } from "angular-feather";
import { Github, Instagram, Linkedin, Link } from "angular-feather/icons";

const icons = {
  Github,
  Instagram,
  Linkedin,
  Link,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}

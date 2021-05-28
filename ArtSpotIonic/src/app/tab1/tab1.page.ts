import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {StreetArt} from "../types";
import {OeuvresService} from "../oeuvres.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  oeuvreList: Observable<StreetArt[]>
  constructor(oeuvresService : OeuvresService) {
    this.oeuvreList = oeuvresService.getOeuvres();
  }

}

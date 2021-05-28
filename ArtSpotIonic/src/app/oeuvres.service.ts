import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {StreetArt} from "./types";

@Injectable({
  providedIn: 'root'
})
export class OeuvresService {
  constructor(private httpClient : HttpClient) {}

    getOeuvre (oeuvreId : string):Observable<StreetArt> {
      return this.httpClient.get<StreetArt>(API + "/" + oeuvreId);
    }

    getOeuvres(): Observable<StreetArt[]> {
    return this.httpClient.get<StreetArt[]>(API);
    }
}

const API = 'http://localhost:3000/streetArt'

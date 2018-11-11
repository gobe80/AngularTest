import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Data } from "./data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataUrl = "assets/data.json";

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.dataUrl);
  }

  constructor(private http: HttpClient) { }
}
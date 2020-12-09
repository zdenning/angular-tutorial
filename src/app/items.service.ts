import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ItemsService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get("/assets/items.json");
  }
}

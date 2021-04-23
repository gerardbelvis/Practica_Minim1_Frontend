import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brote } from '../models/brote';

@Injectable({
  providedIn: 'root'
})
export class BroteService {

  broteRouter: string = `http://localhost:25000/api`;

  constructor(private http: HttpClient) { }

  getBrotes() {
    const path = `${this.broteRouter}/`;
    return this.http.get<Brote[]>(path);
  }

  getBrote(broteid: string) {
    const path = `${this.broteRouter}/${broteid}`;
    return this.http.get<Brote>(path);
  }

  addBrote(newbrote: Brote) {
    const path = `${this.broteRouter}/new`;
    return this.http.post(path, newbrote);
  }

  editBrote(broteid: string, brotetomodify: Brote) {
    const path = `${this.broteRouter}/${broteid}`;
    return this.http.put(path, brotetomodify);
  }

}

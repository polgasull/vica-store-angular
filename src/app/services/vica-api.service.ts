import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class VicaApiService {
  BASE_URL: string = "http://localhost:3000";

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/projects`)
    .map((res) => res.json());
  }

  new(project) {
    return this.http.post(`${this.BASE_URL}/api/projects`, project)
    .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/projects/${id}`)
    .map((res) => res.json());
  }

  edit(project) {
    return this.http.patch(`${this.BASE_URL}/api/projects/${project._id}`, project)
    .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/projects/${id}`)
    .map((res) => res.json());
  }
}

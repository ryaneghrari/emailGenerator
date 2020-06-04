import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = environment.endpoint;
  }

  public get(path: String, external: boolean) {
    if(external){
      return this.http.get(`${path}`);
    }
    else{
      return this.http.get(`${this.endpoint}${path}`);
    }
  }

  public post(path: String, data: any) {
    return this.http.post(`${this.endpoint}${path}`, data);
  }

  public put(path: String, data: any) {
    return this.http.put(`${this.endpoint}${path}`, data);
  }

  public delete(path: String) {
    return this.http.delete(`${this.endpoint}${path}`);
  }
}

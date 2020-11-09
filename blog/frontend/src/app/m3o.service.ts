import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class M3oService {
  public address: string = environment.m3oAddress;
  public namespace: string = environment.m3oNamespace;

  constructor(private http: HttpClient) { }

  get(service: string, endpoint: string, params: HttpParams): Promise<Object> {
    return this.http.get(this.address + "/" + service + "/" + endpoint, {
      headers: {
        "Micro-Namespace": [this.namespace]
      },
      params: params,
    }).toPromise()
  }
}

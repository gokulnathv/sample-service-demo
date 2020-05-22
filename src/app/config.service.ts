import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from './Config';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  public configUrl = 'assets/configs.json';

  public getConfig() {
    return this.http.get<Config>(this.configUrl); 
  }
}
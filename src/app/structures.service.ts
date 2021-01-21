import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {  ResponseData} from './Types';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StructuresService {

  private apiUrl = 'https://astb-miner-v2.herokuapp.com/v2/18lJe-9fq5fHWr-9HuFTzhWnmfygeuXs2bbsXO8vh1FU/0';

  constructor(private http: HttpClient) { }

  // GET data from the server
  getStructures(): Observable<ResponseData>{
    return this.http.get<ResponseData>(this.apiUrl, {responseType: 'json'});
  }

}
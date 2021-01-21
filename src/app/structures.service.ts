import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {  ResponseData, Term } from './Types';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class StructuresService {

  private structureListUrl = "https://astb-miner-v2.herokuapp.com/v2/18lJe-9fq5fHWr-9HuFTzhWnmfygeuXs2bbsXO8vh1FU/0";
  private oboLibraryUrl = "https://www.ebi.ac.uk/ols/api/ontologies/uberon/terms?iri=http://purl.obolibrary.org/obo/";

  constructor(private http: HttpClient) { }

  // GET data from the server
  getStructures(): Observable<ResponseData>{
    return this.http.get<ResponseData>(this.structureListUrl, {responseType: 'json'});
  }

  getOntologyInfo(oboId: string) {
    return this.http.get(this.oboLibraryUrl + oboId, {responseType: 'json'});
  }

}
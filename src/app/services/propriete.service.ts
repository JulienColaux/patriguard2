import { Batiment } from './../models/batiment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ProprieteService {

  private apiUrl = 'http://localhost:3000/proprietes'; // L'URL de l'API


  constructor(private http: HttpClient) { }

  getAllBati(): Observable<Batiment[]> {
    return this.http.get<Batiment[]>(this.apiUrl);
  }

  addBati(newObject: Batiment): Observable<Batiment>{
    return this.http.post<Batiment>(this.apiUrl, newObject);
  }

  removeBati(id: number): Observable<Batiment> {
    return this.http.delete<Batiment> ('${this.apiUrl}/${id}');
  }
}

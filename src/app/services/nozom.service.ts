import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../models/IResponse';
import { CV } from '../models/ICV';


@Injectable({
  providedIn: 'root'
})
export class NozomService {

  constructor(private _http: HttpClient) { }

  getCvList(): Observable<IResponse> {
    return this._http.get<IResponse>(`${environment.nozomUrl}/cv/get-all`);
  }

  getCvById(id: number): Observable<IResponse> {
    return this._http.get<IResponse>(`${environment.nozomUrl}/cv/get-by-id/${id}`);
  }

  deleteCV(id: number): Observable<IResponse> {
    return this._http.delete<IResponse>(`${environment.nozomUrl}/cv/delete/${id}`);
  }

  createCV(model: CV): Observable<IResponse> {
    return this._http.post<IResponse>(`${environment.nozomUrl}/cv/Create`, model);
  }

  updateCV(model: CV): Observable<IResponse> {
    return this._http.put<IResponse>(`${environment.nozomUrl}/cv/update`, model);
  }


}

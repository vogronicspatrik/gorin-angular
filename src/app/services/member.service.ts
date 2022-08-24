import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private url = "Members";
  constructor(private http: HttpClient) { }

  public getMembers() : Observable<Member[]>{
    return this.http.get<Member[]>(`${environment.apiUrl}/${this.url}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RevService {

  constructor(private http:HttpClient) { }

  getAllReviews(title: string) { 
    return this.http.get<any[]>('./api/reviews/'+title); 
 }
  insertReview(revname: string, revdescription: string, revrate: string, username: string, title: string) { 
  return this.http.post<any[]>('./api/reviews/', {'revname': revname, 'revdescription': revdescription, 'revrating': revrate, 'username': username, 'title':title}); 
  }
}

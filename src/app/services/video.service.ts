import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  searchVideos(query: string): Observable<any> {
    const params = {
      part: 'snippet',
      maxResults: '10',
      q: query,
      key: 'AIzaSyCOVge4YoqeSz-JgZHFDqtK08_8L2SzWKo'
    };
    return this.http.get(`${this.apiUrl}/search`, { params });
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Song} from '../song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  API_URL = 'http://localhost:9000/songs';

  constructor(private http: HttpClient) {
  }

  getListSong(): Observable<Song[]> {
    return this.http.get<Song[]>(this.API_URL);
  }

  create(song): Observable<Song> {
    return this.http.post<Song>(this.API_URL, song);
  }

  detail(id): Observable<Song> {
    return this.http.get<Song>(this.API_URL + `/${id}`);
  }

  edit(id, song): Observable<Song> {
    return this.http.put<Song>(this.API_URL + `/${id}`, song);
  }
  delete(id): Observable<Song> {
    return this.http.delete<Song>(this.API_URL + `/${id}`);
  }
}

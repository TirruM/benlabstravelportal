import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightApiService {
  public api_url = environment.serverUrl;
  public token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwcmFzYW5uYUBiZW5sYWJzLmluIiwianRpIjoiMWIxNjk4YmUtZGNmMS00NTE5LTkxODMtYmY2ZjE4ZDQ4NzQ5IiwiaWF0IjoxNTk1OTYwODk2LCJ0SWQiOiIyIiwiY0lkIjoiMiIsImJJZCI6IjIiLCJ1SWQiOiIzIiwidVQiOiJDbGllbnQiLCJpZCI6IjZmZjA0OTAyLWFiZDUtNGZkMi1iODU4LWRhMGVhMTY0ZDc0ZSIsInBOIjoiUHJhc2FubmEgS3Vsa2FybmkiLCJwVCI6IkIyQiIsInJJZHMiOiIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDbGllbnRBZG1pbiIsIm5iZiI6MTU5NTk2MDg5NiwiZXhwIjoxNTk4NTg4ODk2LCJpc3MiOiJVc2VyTWFuYWdlbWVudEFQSSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8ifQ.4RrAiy_eQI0bY1ieR75uj0XvFqRypte-jWGS7KtGh_I";

  constructor(private http: HttpClient) {

  }

  public request(method: 'post' | 'get', type, params): Observable<any> {
    let base;
    if (method === 'post') {
      base = this.http.post<any>(this.api_url + type, params,
        { headers: { "Authorization": `Bearer ${this.token}` } });
    } else {
      base = this.http.get<any>(this.api_url + type, { headers: { "Authorization": `Bearer ${this.token}` } });
    }
    const request = base.pipe(map((data) => data));

    return request;
  }



}

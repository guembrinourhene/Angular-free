import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

 
  private apiUrl = 'http://localhost:3000/client';


  constructor(private http: HttpClient) { }

  /**
   * Get all client
   * @returns Observable<client[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a client with the given id
   * @param id : client id
   * @returns Observable<Course>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a client
   * @param client new client to create
   */
  create(client: any) {
    return this.http.post(this.apiUrl, client);
  }

  /**
   * Update a client with the given id
   * @param id client id to update
   * @param developpeur new client data
   */
  update(id: string, client: any) {
    return this.http.put(this.apiUrl + '/' + id, client);
  }

  /**
   * Delete a client with the given id
   * @param id client id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocieteService {
  private apiUrl = 'http://localhost:3000/societes';


  constructor(private http: HttpClient) { }

  /**
   * Get all societes
   * @returns Observable<Societe[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a societe with the given id
   * @param id : societe id
   * @returns Observable<Societe>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new societe
   * @param societe new societe to create
   */
  create(societe: any) {
    return this.http.post(this.apiUrl, societe);
  }

  /**
   * Update a societe with the given id
   * @param id societe id to update
   * @param societe new societe data
   */
  update(id: string, societe: any) {
    return this.http.put(this.apiUrl + '/' + id, societe);
  }

  /**
   * Delete a societe with the given id
   * @param id societe id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}

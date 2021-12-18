import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  private apiUrl = 'http://localhost:3000/profils';


  constructor(private http: HttpClient) { }

  /**
   * Get all categories
   * @returns Observable<Categorie[]>
   */
  all() {
    return this.http.get(this.apiUrl);
  }


  /**
   * Get a categorie with the given id
   * @param id : categorie id
   * @returns Observable<Categorie>
   */
  get(id: string) {
    return this.http.get(this.apiUrl + '/' + id)
  }

  /**
   * Create a new categorie
   * @param profile new categorie to create
   */
  create(profile: any) {
    return this.http.post(this.apiUrl, profile);
  }

  /**
   * Update a profil with the given id
   * @param id profil id to update
   * @param profil new categorie data
   */
  update(id: string, nom: any) {
    return this.http.put(this.apiUrl + '/' + id, nom);
  }

  /**
   * Delete a categorie with the given id
   * @param id categorie id to delete
   */
  delete(id: string) {
    return this.http.delete(this.apiUrl + '/' + id)
  }
}

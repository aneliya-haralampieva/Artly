import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artwork } from '../models/artwork.model';
import { tap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ArtService {
  private http = inject(HttpClient);
  
  // Base URL for your database
  private readonly DB_URL = 'https://artlygallery-bc857-default-rtdb.europe-west1.firebasedatabase.app';

  private readonly artItems = signal<Artwork[]>([]);

  // READ (All) - This pulls the entire gallery from Firebase
  loadArt() {
    return this.http.get<{ [key: string]: Artwork }>(`${this.DB_URL}/artwork.json`).pipe(
      map(responseData => {
        const artArray: Artwork[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            artArray.push({ ...responseData[key], id: key });
          }
        }
        return artArray;
      }),
      tap(art => this.artItems.set(art))
    );
  }

  getArt() {
    return this.artItems.asReadonly();
  }

  // READ (Single) - UPDATED with Auto-Refresh Logic
  getArtById(id: string) {
    // If the signal is empty (usually happens on page refresh), 
    // we trigger a load so the data actually appears.
    if (this.artItems().length === 0) {
      this.loadArt().subscribe();
    }
    return this.artItems().find(item => item.id === id);
  }

  // CREATE - Post to Database
  addArt(newArt: Artwork) {
    return this.http.post(`${this.DB_URL}/artwork.json`, newArt).pipe(
      tap(() => {
        // Refresh the list after adding to get the real Firebase IDs
        this.loadArt().subscribe();
      })
    );
  }

  // UPDATE - Used for the "Edit Price" feature
  updateArt(id: string, updatedData: Partial<Artwork>) {
    return this.http.patch(`${this.DB_URL}/artwork/${id}.json`, updatedData).pipe(
      tap(() => {
        this.artItems.update(items => 
          items.map(item => item.id === id ? { ...item, ...updatedData } : item)
        );
      })
    );
  }

  // DELETE - Removes from Database
  deleteArt(id: string) {
    return this.http.delete(`${this.DB_URL}/artwork/${id}.json`).pipe(
      tap(() => {
        this.artItems.update(items => items.filter(item => item.id !== id));
      })
    );
  }
}
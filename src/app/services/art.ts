import { Injectable, signal } from '@angular/core';
import { Artwork } from '../models/artwork.model';

@Injectable({ providedIn: 'root' })
export class ArtService {
  private readonly artItems = signal<Artwork[]>([
    {
      id: '1',
      title: 'Eternal Bloom',
      artist: 'Elena Petrova',
      price: 1200,
      category: 'Painting',
      imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500'
    },
    {
      id: '2',
      title: 'Geometric Echo',
      artist: 'Marco Rossi',
      price: 850,
      category: 'Digital Art',
      imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500'
    },
    {
      id: '3',
      title: 'City Cycle',
      artist: 'S. Jenkins',
      price: 450,
      category: 'Photography',
      imageUrl: 'https://images.unsplash.com/photo-1467385829985-2b0fb82b5193?w=500'
    }
  ]);

  getArt() {
    return this.artItems.asReadonly();
  }
}
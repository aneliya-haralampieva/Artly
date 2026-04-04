import { Component, inject } from '@angular/core';
import { ArtService } from '../../services/art'; // Matches your art.ts file
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class CatalogComponent {
  private artService = inject(ArtService);
  
  // This signal allows us to loop through the art in our HTML
  public artList = this.artService.getArt();
}
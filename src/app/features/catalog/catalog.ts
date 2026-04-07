import { Component, inject, OnInit } from '@angular/core';
import { ArtService } from '../../services/art';
import { CurrencyPipe, CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class CatalogComponent implements OnInit {
  private artService = inject(ArtService);
  
  // This connects our HTML to the data in the Service
  public artList = this.artService.getArt();

  // This runs the moment the component is born
  ngOnInit(): void {
    this.loadGallery();
  }

  loadGallery(): void {
    // We must subscribe or the "GET" request never leaves the browser
    this.artService.loadArt().subscribe();
  }

  /**
   * Handles the updating of an artwork's price.
   * This fulfills the 'Update' requirement of CRUD.
   */
  onEditPrice(id: string, currentPrice: number): void {
    const newPrice = prompt('Enter the new price for this masterpiece:', currentPrice.toString());
    
    // Check if user entered a valid number and didn't hit cancel
    if (newPrice !== null && !isNaN(Number(newPrice))) {
      this.artService.updateArt(id, { price: Number(newPrice) }).subscribe({
        next: () => {
          console.log('Price updated successfully!');
          // Refresh the list to show the new price
          this.loadGallery();
        },
        error: (err) => alert('Update failed. Check your connection.')
      });
    }
  }

  /**
   * Handles the deletion of an artwork.
   * This fulfills the 'Delete' requirement of CRUD.
   */
  onDelete(id: string): void {
    const confirmed = confirm('Are you sure you want to remove this masterpiece from the gallery?');
    
    if (confirmed) {
      this.artService.deleteArt(id).subscribe({
        next: () => {
          console.log('Deleted successfully');
          // Refresh the list after deleting
          this.loadGallery();
        },
        error: (err) => alert('Delete failed. Check your Firebase rules!')
      });
    }
  }
}
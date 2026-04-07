import { Component, inject, input } from '@angular/core';
import { ArtService } from '../../services/art';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-art-details',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, RouterLink],
  template: `
    <div class="details-container" style="padding: 40px; max-width: 900px; margin: 0 auto; font-family: sans-serif;">
      <a routerLink="/catalog" style="text-decoration: none; color: #3498db; font-weight: bold;">← Back to Gallery</a>
      
      @if (art()) {
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 30px; align-items: start;">
          <img [src]="art()?.imageUrl" [alt]="art()?.title" style="width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          
          <div>
            <h1 style="font-size: 2.5rem; margin-bottom: 10px;">{{ art()?.title }}</h1>
            <p style="font-size: 1.2rem; color: #666; margin-bottom: 20px;">by {{ art()?.artist }}</p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
              <p><strong>Category:</strong> {{ art()?.category }}</p>
              <p style="font-size: 1.5rem; color: #27ae60; font-weight: bold; margin-top: 10px;">
                {{ art()?.price | currency:'USD' }}
              </p>
            </div>
            
            <button style="margin-top: 30px; width: 100%; padding: 15px; background: #2c3e50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1rem;">
              Purchase Masterpiece
            </button>
          </div>
        </div>
      } @else {
        <div style="text-align: center; margin-top: 100px;">
          <h3>Looking for the artwork...</h3>
          <button routerLink="/catalog">Return to Gallery</button>
        </div>
      }
    </div>
  `
})
export class ArtDetailsComponent {
  private artService = inject(ArtService);
  

  id = input.required<string>(); 


  art = () => this.artService.getArtById(this.id());
}
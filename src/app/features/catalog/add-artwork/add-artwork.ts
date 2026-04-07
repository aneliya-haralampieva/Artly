import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtService } from '../../../services/art';

@Component({
  selector: 'app-add-artwork',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-artwork.html',
  styleUrl: './add-artwork.css'
})
export class AddArtworkComponent {
  private fb = inject(FormBuilder);
  private artService = inject(ArtService);
  private router = inject(Router);

  artForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    artist: ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(1)]],
    category: ['Painting', [Validators.required]],
    imageUrl: ['', [Validators.required]]
  });

  onSubmit() {
    if (this.artForm.valid) {
      const newArt = {
        id: Date.now().toString(),
        title: this.artForm.value.title,
        artist: this.artForm.value.artist,
        price: this.artForm.value.price,
        category: this.artForm.value.category,
        imageUrl: this.artForm.value.imageUrl
      } as any;

      // FIX: We must .subscribe() so the HTTP request actually fires!
      this.artService.addArt(newArt).subscribe({
        next: () => {
          // Only navigate away AFTER the database confirms it's saved
          this.router.navigate(['/catalog']);
        },
        error: (err) => {
          console.error('Database Error:', err);
          alert('Could not save to Firebase. Check your URL in art.ts!');
        }
      });
    }
  }
}
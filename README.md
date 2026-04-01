# Artly - Functional Guide

### Application Purpose
Artly is a minimalist digital gallery and marketplace designed to connect independent artisans with art lovers. The goal of the application is to provide a clean, clutter-free space where creators can showcase their handmade crafts—ranging from pottery and paintings to jewelry.

### User Roles
* **Guest (Not Authenticated):** Can view the home page, the art catalog, and item details. Can register and login.
* **Authenticated User:** Can do everything a guest can, plus create new art listings and edit/delete their own posts.

### Public Features
* **Home Page:** Introduction to the Artly platform.
* **Art Catalog:** A grid view displaying all available artworks.
* **Details Page:** Specific information, pricing, and high-quality visuals for a single item.
* **Login/Register:** User authentication forms with validation.

### Authenticated User Features
* **Create Listing:** Form to add new art to the gallery.
* **Edit/Delete:** Management tools for the user's own listings.
* **User Dashboard:** A private area to view the user's own posts.

### Main Application Flow
1. User lands on the **Home Page** and explores the **Catalog**.
2. User clicks an item to see the **Details**.
3. User **Registers/Logs in** to become an active member.
4. Authenticated user **Creates** a new art listing.
5. The new item appears immediately in the **Catalog** for everyone to see.

### Data Structure (Art Object)
* `id`: Unique identifier
* `title`: Name of the piece
* `category`: Type of art (Pottery, Painting, etc.)
* `imageUrl`: Link to the image
* `price`: Numeric value
* `description`: Text details
* `_ownerId`: ID of the creator

### Project Architecture
* `src/app/core/`: Navigation, Header, Footer
* `src/app/features/`: Catalog, Auth, and Detail components
* `src/app/services/`: Data and Auth logic
* `src/app/models/`: TypeScript interfaces

### Technologies Used
* Angular, TypeScript, Firebase, CSS

### How to Run
1. Clone the repository.
2. Run `npm install`.
3. Run `ng serve` and open `http://localhost:4200`.
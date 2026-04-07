import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router'; // Added withComponentInputBinding
import { provideHttpClient } from '@angular/common/http'; 

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), 
    // withComponentInputBinding() allows the ArtDetailsComponent to read the :id from the URL
    provideRouter(routes, withComponentInputBinding()),
    
    // This provider is required for the ArtService to use HttpClient
    provideHttpClient() 
  ],
};
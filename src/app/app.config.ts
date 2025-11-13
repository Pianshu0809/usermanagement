import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';
import { provideEffects } from '@ngrx/effects';
import { userReducer } from './store/reducer';
import { UserEffects } from './store/effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    MatDialogModule,
    provideStore({users: userReducer}),
    provideEffects(UserEffects)
]
};

import { Routes } from '@angular/router';
/** Components */
import { HomeComponent } from './home.component';
/** Services */

/**
 * List of services for the main module
 */
export const homeProviders: any[] = [
  // Add services here
];

/**
 * List of routes for the main module
 */
export const homeRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

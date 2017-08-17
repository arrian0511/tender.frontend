import { Routes } from '@angular/router';
/** Components */
import { TendersComponent } from './tenders.component';
/** Services */
import { TendersService } from './tenders.service';

/**
 * List of services for the main module
 */
export const tendersProviders: any[] = [
  TendersService
];

/**
 * List of routes for the main module
 */
export const tendersRoutes: Routes = [
  { path: 'tenders', component: TendersComponent }
];

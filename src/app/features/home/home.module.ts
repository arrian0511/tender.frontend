import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/** Modules */
import { SharedModule } from '../../shared';
/** Components */
import { HomeComponent } from './home.component';
/** Constants */
import { 
  homeRoutes,
  homeProviders
} from './home.constants';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedModule
  ],
  providers: [
    ...homeProviders
  ]
})

export class HomeModule { }

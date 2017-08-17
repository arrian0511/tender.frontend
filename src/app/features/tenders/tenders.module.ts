import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/** Modules */
import { SharedModule } from '../../shared';
/** Components */
import { TendersComponent } from './tenders.component';
/** Constants */
import { 
  tendersRoutes,
  tendersProviders
} from './tenders.constants';

@NgModule({
  declarations: [
    TendersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tendersRoutes),
    SharedModule
  ],
  providers: [
    ...tendersProviders
  ]
})

export class TendersModule { }

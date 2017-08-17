import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { TendersModule } from './tenders/tenders.module';

@NgModule({
  imports: [
    HomeModule,
    TendersModule
  ]
})

export class FeaturesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

/**
 * Angular material design modules implementation
 */
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CdkTableModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    CdkTableModule
  ],
})

export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
/** Shared Modules */
import { SharedModule } from '../shared';

/** Components */
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SideNavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    SideNavComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    SideNavComponent,
    RouterModule
  ],
})

export class LayoutModule { }

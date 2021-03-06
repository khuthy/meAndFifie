import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { MainBarComponent } from '../Components/main-bar/main-bar.component';
import { SubBarComponent } from '../Components/sub-bar/sub-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage, MainBarComponent, SubBarComponent]
})
export class FolderPageModule {}

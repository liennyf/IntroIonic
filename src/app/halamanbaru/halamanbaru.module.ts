import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HalamanbaruPageRoutingModule } from './halamanbaru-routing.module';

import { HalamanbaruPage } from './halamanbaru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HalamanbaruPageRoutingModule
  ],
  declarations: [HalamanbaruPage]
})
export class HalamanbaruPageModule {}

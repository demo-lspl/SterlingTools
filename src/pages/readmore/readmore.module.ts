import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadmorePage } from './readmore';

@NgModule({
  declarations: [
    ReadmorePage,
  ],
  imports: [
    IonicPageModule.forChild(ReadmorePage),
  ],
})
export class ReadmorePageModule {}

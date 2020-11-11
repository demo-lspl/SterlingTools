import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestcartPage } from './testcart';

@NgModule({
  declarations: [
    TestcartPage,
  ],
  imports: [
    IonicPageModule.forChild(TestcartPage),
  ],
})
export class TestcartPageModule {}

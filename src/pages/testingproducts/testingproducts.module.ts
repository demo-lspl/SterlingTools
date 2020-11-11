import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestingproductsPage } from './testingproducts';

@NgModule({
  declarations: [
    TestingproductsPage,
  ],
  imports: [
    IonicPageModule.forChild(TestingproductsPage),
  ],
})
export class TestingproductsPageModule {}

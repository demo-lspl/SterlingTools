import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home1Page } from './home1';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    Home1Page,
  ],
  imports: [
    IonicPageModule.forChild(Home1Page),
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
})
export class Home1PageModule {}

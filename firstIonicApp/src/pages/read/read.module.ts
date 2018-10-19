import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { ReadPage } from './read';

import { PizzaService } from '../../providers/pizza-service';

@NgModule({
  declarations: [
    //ReadPage,
  ],
  providers: [
    PizzaService,
    
  ],
  imports: [
    //IonicPageModule.forChild(ReadPage),
  ],
})
export class ReadPageModule {}
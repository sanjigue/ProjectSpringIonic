import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { ReadAllPage } from './read-all';

import { PizzaService } from '../../providers/pizza-service';

@NgModule({
  declarations: [
    //ReadAllPage,
  ],
  providers: [
    PizzaService,
    
  ],
  imports: [
    //IonicPageModule.forChild(ReadAllPage),
  ],
})
export class ReadAllPageModule {}

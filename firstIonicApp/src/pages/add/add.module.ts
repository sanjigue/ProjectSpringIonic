import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { AddPage } from './add';

import { PizzaService } from '../../providers/pizza-service';

@NgModule({
  declarations: [
    //AddPage,
  ],
  providers: [
    PizzaService,
    
  ],
  imports: [
    //IonicPageModule.forChild(AddPage),
  ],
})
export class AddPageModule {}

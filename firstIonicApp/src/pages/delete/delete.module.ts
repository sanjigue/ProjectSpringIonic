import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { DeletePage } from './delete';

import { PizzaService } from '../../providers/pizza-service';

@NgModule({
  declarations: [
    //DeletePage,
  ],
  providers: [
    PizzaService,
    
  ],
  imports: [
    //IonicPageModule.forChild(DeletePage),
  ],
})
export class DeletePageModule {}

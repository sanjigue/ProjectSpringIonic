import { Component } from '@angular/core';
import { NavController,App} from 'ionic-angular';

import { AddPage } from '../add/add';
import { ReadPage } from '../read/read';
import { ReadAllPage } from '../read-all/read-all';
import { DeletePage } from '../delete/delete';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public app : App) {

  }

  goToAdd(){
    //this.app.getRootNav().setRoot(AddPage);
    this.navCtrl.push(AddPage);
  }

  goToReadAll(){
    this.navCtrl.push(ReadAllPage);
  }

  goToRead(){
    this.navCtrl.push(ReadPage);
    //this.app.getRootNav().setRoot(ReadPage);
  }
  
  goToDelete(){
    this.navCtrl.push(DeletePage);
    //this.app.getRootNav().setRoot(ReadPage);
  }
}

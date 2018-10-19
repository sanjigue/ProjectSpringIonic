import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { PizzaService } from '../../providers/pizza-service';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  pizza: any = {name: '', tipoMasa: ''};
  namePizza: string;
  typeDought: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public pizzaService : PizzaService, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
    
  }

  addPizza(){
    this.pizza= {name: this.namePizza, tipoMasa: this.typeDought};

    this.pizzaService.add(this.pizza).subscribe(response => {
      let toast = this.toastCtrl.create({
               message: 'The pizza: "' + this.pizza.name + '"has been added.',
               duration: 2000,
               position: 'bot'
             });
             toast.present();
    });
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PizzaService } from '../../providers/pizza-service';
/**
 * Generated class for the ReadAllPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-all',
  templateUrl: 'read-all.html',
})
export class ReadAllPage {

  private pizzas: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public pizzaService : PizzaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadAllPage');
    this.pizzaService.getAllPizzas().subscribe(pizzas => {
      this.pizzas = pizzas;
    })
  }

}

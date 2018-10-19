import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PizzaService } from '../../providers/pizza-service';

@IonicPage()
@Component({
  selector: 'page-read',
  templateUrl: 'read.html',
})
export class ReadPage {

  pizza: any = {name: '', tipoMasa: ''};
  idPizza: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public pizzaService : PizzaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadPage');
  }

  getPizza(id){
    console.log(id);
    this.pizzaService.get(id).subscribe(
      (pizza: {name: string, tipoMasa: string}) => {
        this.pizza = pizza;
      },
      (error) => {
        console.log(error);
      }
    );  
  }

  getPizzaFromWeb(){
    console.log(this.idPizza);
    this.getPizza(this.idPizza);
  }



}

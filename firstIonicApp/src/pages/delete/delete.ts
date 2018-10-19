import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { PizzaService } from '../../providers/pizza-service';

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {

  pizzas: Array<any>;

  pizza: any = {id: '',name: '', tipoMasa: ''};
  idPizza: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public pizzaService : PizzaService, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePage');
  }

  getPizza(id){
    console.log(id);
    this.pizzaService.get(id).subscribe(
      (pizza: {id: number, name: string, tipoMasa: string}) => {
        this.pizza = pizza;
      },
      (error) => {
        console.log(error);
      }
    );
    return this.pizza;
  }

  remove(id) {
    this.pizza = this.getPizza(id);
      
    this.pizzaService.remove(id).subscribe(response => {
      let toast = this.toastCtrl.create({
               message: 'The pizza: "' + this.pizza.name + '"has been deleted.',
               duration: 2000,
               position: 'bot'
             });
             toast.present();
    });
  }

  deletePizzaFromWeb(){
    this.remove(this.idPizza);
  }
  
}
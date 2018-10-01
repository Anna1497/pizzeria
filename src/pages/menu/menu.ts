import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DishProvider } from '../../providers/dish/dish';
import { Dish } from '../../shared/dish';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  dishes: Dish[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private dishService: DishProvider, @Inject('DbURL') private dbURL) {
  }{

  }

  getProviderDishes(){
    this.dishService
    .getDishes()
    .subscribe(
      response => {
        console.log("response");
        this.dishes= response;
      }
    )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}

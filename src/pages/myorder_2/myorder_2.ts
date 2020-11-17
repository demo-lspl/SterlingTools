import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';
import { HomePage } from './../home/home';
import { ViewcartPage } from './../viewcart/viewcart';
import { ApiProvider } from './../../providers/api/api';
import { VieworderdetailsPage } from './../vieworderdetails/vieworderdetails';
import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, Platform, App } from 'ionic-angular';


import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
@Component({
  selector: 'page-myorder_2 ',
  templateUrl: 'myorder_2.html'
})
export class Myorder_2Page implements OnInit {

  obj;
  countProducts:number|any;
  strData: string;
  buttonIcon: string ;
  viewOrdersList: any = [];
  viewCartList:any = [];


  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public apiProvider: ApiProvider,
              public platform: Platform,
              public app: App) {
  
  }

  ngOnInit() {
    this.viewCartApi();
    this.viewOrdersApi();
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'Myorder_2Page') {
          if (nav.canGoBack()){
          } else {
              this.navCtrl.setRoot(HomePage);
          }
      }
  });
  }
  
     cartPage() {
    // let modal = this.modalCtrl.create(CartPage);
    // modal.present();

    this.navCtrl.setRoot(ViewcartPage);
  }
  
     searchPage() {
    // let modal = this.modalCtrl.create(SearchPage);
    // modal.present();
  }
    
  
  


  doRefresh(event) {
    console.log('Begin async operation');
    this.viewOrdersApi();
    this.viewCartApi();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      //  event.target.complete();
      event.complete();
    
    }, 500);
  }

  viewOrdersApi(){
    console.log('viewOrdersApi called    ');
    const service = this.apiProvider.getOrders();
    service.subscribe((data) => {
   
        const resultado = data;
        console.log('Get response: ' + resultado);
        this.viewOrdersList = resultado;
    });
  }

  
  wishlistPage() {
    this.navCtrl.push(WishlistupdatedPage);
  }

        
  async viewCartApi() {            
    try {
      const service = this.apiProvider.getCartDetails();  
      service.subscribe(async (data) => {
        if (data) {
          const resultado = data;
          this.viewCartList = resultado;     
          this.obj = JSON.stringify(data);
          console.log('All Json Response' + this.obj);
           this.strData = 'No Products in Cart';  
    
               
          // console.log('Length of cart ' + this.viewCartList.length);
  
            
           
       
           if(this.viewCartList.length>1) {
            console.log('Cart Filled ');
            this.countProducts = this.viewCartList.length;
             this.buttonIcon = "cart";
           }
  
           else{
            console.log('Cart Empty ');
           //  this.buttonIcon = "cart";
           this.countProducts = 'Empty';
  
           }
  
  
  
         
                                
       
        } else {
        }
  
      });
    } catch (error) {}
  }

}

import { ViewcartPage } from './../viewcart/viewcart';
import { CartPage } from './../cart/cart';
import { SearchPage } from './../search/search';
import { VieworderdetailsPage } from './../vieworderdetails/vieworderdetails';
import { ApiProvider } from './../../providers/api/api';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';




/**
 * Generated class for the VieworderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vieworder',
  templateUrl: 'vieworder.html',
})
export class VieworderPage implements OnInit{

 

  viewOrdersList: any = [];
  items = [];
  


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public apiProvider: ApiProvider,
              public modalCtrl: ModalController,
              public loadingController: LoadingController) {
                 // this.showLoadingOrdersFetching();
                this.viewOrdersApi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VieworderPage');
    this.viewOrdersApi();
  }


  cartPage() {
    // let modal = this.modalCtrl.create(CartPage);
    // modal.present();
    this.navCtrl.push(ViewcartPage);
  }
  
     searchPage() {
    // let modal = this.modalCtrl.create(SearchPage);
    // modal.present();
    // this.navCtrl.setRoot(SearchPage);
  }



  ngOnInit() {
    console.log('ngOnInit VieworderPage');
    this.viewOrdersApi();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.viewOrdersApi();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      //  event.target.complete();
      event.complete();
      // window.location.reload();
     // window.location.reload();
      // location.reload();
    }, 500);
  }


  itemdetailPage(ID,post_title,post_status,comment_status,ping_status,post_type) {

    this.navCtrl.push(VieworderdetailsPage, {
      ID: ID,
      post_title:post_title,
      post_status:post_status,
      comment_status:comment_status,
      ping_status:ping_status,
      post_type:post_type
    });

    console.log('Sent view orders List id ' + ID);
    console.log('Sent view orders List orderTitle ' + post_title);
    console.log('Sent view orders List post_status ' + post_status);
    console.log('Sent view orders List comment_status ' + comment_status);
    console.log('Sent view orders List ping_status ' + ping_status);
    console.log('Sent view orders List post_type ' + post_type);
  }
  


     


  // (click)="viewOrderDetailPage(orders.post_date)"

  viewOrdersApi(){
    console.log('viewOrdersApi called    ');
    const service = this.apiProvider.getOrders();
    service.subscribe((data) => {
      let loader = this.loadingController.create({
        content: "your message"
      });  
  loader.present();
        const resultado = data;
        console.log('Get response: ' + resultado);
        this.viewOrdersList = resultado;

        loader.dismiss();


        
      
    });
  }


  showLoadingOrdersFetching() {
    let loading = this.loadingController.create({
      content: 'Please wait Fetching Orders!'
    });
  
    loading.present();
    // this.callRegisterApi();
  
    setTimeout(() => {
      loading.dismiss();
    }, 8000);
  }


  
  

    

}

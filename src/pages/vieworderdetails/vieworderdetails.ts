import { ViewcartPage } from "./../viewcart/viewcart";

/**
 * Generated class for the VieworderdetailsPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { LoadingController } from "ionic-angular";
import { CartPage } from "./../cart/cart";
import { SearchPage } from "./../search/search";
import { HttpClient } from "@angular/common/http";
import { NavController, ModalController, NavParams } from "ionic-angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "page-vieworderdetails",
  templateUrl: "vieworderdetails.html",
})
export class VieworderdetailsPage implements OnInit {
  strData: string;

  strDynamicId: string;
  strOrderTitle: string;
  strOrderStatus: string;
  strCommentStatus: string;
  strPingStatus: string;
  strStatusType: string;
  productCategoryInformation: any = [];
  obj;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private navParams: NavParams,
    public httpClient: HttpClient,
    public loadingController: LoadingController
  ) {
    this.strDynamicId = navParams.get("ID");

    console.log("Received productsList id " + this.strDynamicId);
  }

  ngOnInit() {
    this.showLoadingControllerLaunch();
    this.callOrderDetailsApi();
    this.httpClient
      .get(
        "http://busybanda.com/sterling-tools/api/get_shop_order_by_id?" +
          "id=" +
          this.strDynamicId
      )
      .subscribe((jsonResponse) => {
        this.productCategoryInformation = jsonResponse["result"];

        this.obj = JSON.stringify(jsonResponse);

        if (
          this.productCategoryInformation &&
          this.productCategoryInformation.length
        ) {
          console.log("Particular product details available ");
        } else {
          this.strData = "No data available";
          console.log("Particular product empty " + this.obj);
        }

        for (const entry of this.productCategoryInformation) {
          const strReplacedValue = entry.post_status.replace("wc-", "");
          console.log("strReplacedValue " + strReplacedValue);

          this.strOrderTitle = "Order Title: " + entry.post_title;
          this.strOrderStatus = "Order Status: " + strReplacedValue;
          this.strCommentStatus = "Comment Status: " + entry.comment_status;
          this.strPingStatus = "Ping Status: " + entry.ping_status;

          // this.strProductCategoryTitle = 'Product Category Title: ' + entry.post_title;
          // this.strProductGuid = 'Product Guid: ' + entry.guid;

          // post_title,guid
        }
      });
  }

  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: "Please wait!",
    });

    loading.present();
    // this.callRegisterApi();

    setTimeout(() => {
      loading.dismiss();
    }, 8000);
  }

  searchPage() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  }

  cartPage() {
    // let modal = this.modalCtrl.create(CartPage);
    // modal.present();
    this.navCtrl.push(ViewcartPage);
  }

  callOrderDetailsApi() {
    this.httpClient
      .get("http://busybanda.com/sterling-tools/api/get_current_user_data/")
      .subscribe((jsonResponse) => {
        this.productCategoryInformation = jsonResponse["result"];

        this.obj = JSON.stringify(jsonResponse);

        //  console.log('Particular product details ' + this.obj);

        if (
          this.productCategoryInformation &&
          this.productCategoryInformation.length
        ) {
          console.log("Particular product details available ");
        } else {
          this.strData = "No data available";
          console.log("Particular product empty " + this.obj);
        }

        //  for (const entry of this.productCategoryInformation) {

        //   const strReplacedValue = entry.post_status.replace("wc-", "");;
        //   console.log('strReplacedValue ' + strReplacedValue);
        //   this.strOrderTitle = 'Order Title: ' + entry.post_title;
        //   this.strOrderStatus = 'Order Status: ' + strReplacedValue;
        //   this.strCommentStatus = 'Comment Status: ' + entry.comment_status;
        //   this.strPingStatus = 'Ping Status: ' + entry.ping_status;
        // }
      });
  }
}

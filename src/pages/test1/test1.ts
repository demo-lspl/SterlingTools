import { HttpClient } from "@angular/common/http";
import { ApiProvider } from "./../../providers/api/api";
import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-test1",
  templateUrl: "test1.html",
})
export class Test1Page implements OnInit {
  viewCartList: any = [];
  productsListInformation: any = [];
  productsListInformationTemp: any = [];

  objProductsViewCart;
  strProductNameCart: string = "";
  strProductNameCart1: string = "";
  dynamicId: string = "";
  strPName: string = "";
  strPName1: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiProvider: ApiProvider,
    public httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.viewCartApi();
  }

  async viewCartApi() {
    try {
      const service = this.apiProvider.getCartDetails();
      service.subscribe(async (data) => {
        const resultado = data;
        this.viewCartList = resultado;
        console.log(this.viewCartList);
        for (let i = 0; i < this.viewCartList.length; i++) {
          console.log(this.viewCartList.length);
          console.log(this.viewCartList[i].product_id);
          this.dynamicId = this.viewCartList[i].product_id;
          this.getProductsInCart(this.dynamicId);
        }
      });
    } catch (error) {}
  }

  getProductsInCart(dynamicId) {
    this.httpClient
      .get(
        "http://busybanda.com/sterling-tools/api/get_products_by_id?" +
          "id=" +
          dynamicId
      )
      .subscribe((jsonResponse) => {
        // console.log('Dynamic Product Id ' + dynamicId);
        this.productsListInformation = jsonResponse["result"];
        this.objProductsViewCart = JSON.stringify(jsonResponse);
        var list = new Array();

        this.productsListInformation.forEach((number, index, array) => {
          // console.log(array);
          for (var key in array) {
            var value = array[key];
            console.log("***" + key, value);
          }
        });

        //  Object.keys(this.productsListInformation).forEach(key => {
        //   //console.log(key);        // the name of the current key.
        //   //console.log('Hey  ' +this.productsListInformation[key].name); // the value of the current key.
        //   // this.strProductNameCart = this.productsListInformation[key].name;
        // });

        // for (let [key, value] of Object.entries(this.productsListInformation)) {
        // }

        //   var p = {
        //     "p1": "value1",
        //     "p2": "value2",
        //     "p3": "value3"
        // };
        //   for (var key of Object.keys(p)) {
        //     console.log(key + " : " + p[key])
        //  }

        const productListData = JSON.parse(
          JSON.stringify(this.productsListInformation)
        );
        if (productListData === null) {
          console.log("Product details Not Found in Cart");
        } else {
          // productListData.forEach(function(productListData){
          //   console.log(task);
          // });

          productListData.forEach((attribute, index, array) => {
            if (attribute.name && attribute.name.length) {
              // this.strProductNameCart = this.strProductNameCart +"," + attribute.name;
              // this.strPName = this.strProductNameCart;
              console.log("!!!!!!!! " + attribute.name);
              console.log("Product details Found in Cart");

              this.productsListInformationTemp = attribute.name;
              this.strPName1 = this.productsListInformationTemp;
              this.productsListInformation.push(
                this.productsListInformationTemp
              );
            } else {
            }
          });
        }
        console.log("strPName " + this.strPName);
      });

    // for (let i =0;i<this.productsListInformation.length;i++){
    //   console.log(this.productsListInformation[i].name);
    //   //  this.strProductNameCart = this.productsListInformation[i].name;
    //    if (this.productsListInformation && this.productsListInformation.length) {
    //     // not empty
    //     // alert('not empty')
    //     this.strProductNameCart == 'Test';
    //     alert('not empty' + this.strProductNameCart);
    //  } else {
    //     // empty
    //     alert('empty')
    //  }
    //  }
    //  console.log(JSON.stringify(this.productsListInformation));
    // var keys = Object.keys(this.productsListInformation);
    //   for (var i = 0; i < keys.length; i++) {
    //     var value = this.productsListInformation[name];
    //  }

    //  this.productsListInformation.forEach((attribute, index, array) => {
    //   if (attribute.name &&attribute.name.length
    //     ) {
    //        console.log("Success..." + attribute.name + '---' + this.productsListInformation.length);

    //        this.strProductNameCart = attribute.name[0];
    //        // this.strProductNameCart = attribute.name[1];

    //     } else {
    //       console.log("Success!!!!!!!!");
    //     }
    // });

    // for (let i =0;i<this.productsListInformation.length;i++){
    //   alert( 'Name ' + this.productsListInformation[i].name );
    //   this.strProductNameCart = this.productsListInformation[i].name;
    // }
    //   for(var i=0; i < this.productsListInformation.length; i++){
    //     // console.log(i);
    //    //  console.log(this.productsListInformation[i]);
    //     this.strProductNameCart1 += this.productsListInformation[i].name;
    // }

    //     var newObj = [ { id : "1", name: "one" }, { id : "2", name: "two" }, { id : "3", name: "three" } ]
    // for(var i1=0; i1<newObj.length; i1++){
    //   console.log(newObj[i1].id + ': ' + newObj[i1].name);
    //   this.strProductNameCart = newObj[i1].name;
    // }
  }
}

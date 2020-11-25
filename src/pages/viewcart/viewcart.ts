/**
 *  Created By Lasting Erp
 */



import { DemoPage } from './../demo/demo';
import { TestingPage } from './../testing/testing';
import { HomePage } from './../home/home';
import { Storage } from '@ionic/storage';
import { ApiProvider } from './../../providers/api/api';
import { ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, Platform, App } from 'ionic-angular';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';

  
@IonicPage()
@Component({
  selector: 'page-viewcart',
  templateUrl: 'viewcart.html',
})
export class ViewcartPage implements OnInit{

  public _elRef:ElementRef
  accordionExpanded = false;
  accordionExpanded1 = false;
  icon: string = "arrow-forward";
  @ViewChild("cc") cardContent: any;
  @ViewChild("cc1") cardContent1: any;
  @ViewChild('nativeElement', { read: Element }) alert:Element;
  @ViewChild('nativeElement', { read: Element }) alert1:Element;
  currentNumber :number;
  strProductId:number;
  strProductTitle:string;
  strProductQuantity: number ;
  strProductRegularPriceRevised:string;
  strProductRegularPriceRevised1:number| any;
  strproductprice:number| any;
  strproductpriceTushar:number;
  strSubTotalAmount:number | any;   
  strSubTotalAmountFlatRate:number | any;   
  objViewCart;
  objProductsViewCart;
  networkStatus: NetworkStatus;  
  networkListener: PluginListenerHandle;
  strDataLocal:string;
  strDataServer:string;

  elements = document.getElementsByClassName("columngrid") as HTMLCollectionOf<HTMLElement>;
  numberResult: number ;  
  numberresult:any;
  viewCartList: any = [];
  productsLocalCart :any = [];
  cart: any = [];
  itemsInCart: Object[] = [];
  id;
  productsListInformation: any = [];
  dynamicId:string;
  strProductName:string;
  strProductRegularPrice:any;
  strImage:string;
  strProductMake:string;  
  strId:number;
  obj;
  objRemoveProductFromCart;
  obj1;
  strPriceValue: number;  
  strProductIdValue: any ;  
  strNumber:number;
  strDynamicId:number | any ;
  strDynamicId1:number;
  strDynamicProductQuantity:number ;
  total1 : number;
  strQuantityUpdated:number;
  varNumber: -1;
  sum = 0;
  upperNames = [];
  upperCaseName: string;
  elements1 = document.getElementsByClassName("value") as HTMLCollectionOf<HTMLElement>;
  valueQuantity:number ;
  valueQuantity1 = [];
  myText :HTMLInputElement;
  public amount:number;
  testTushar:number;
  dropdown1 = "Local Pickup";
  total = 0; 
  buttonIcon: string = "home";
  buttonIcon1: string = "home";

  eventCartNumber:number = 127890;
  buttonDisabled;
  index: number;
  finalData: any = [];
  testArray1=[];
  testArray2:any = [] ;
  strTestProductId:number;
  strUserId:number | any;
  strProductDescription:string;
  productTotalPrice:number;
  strValue:number;


   
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public httpClient: HttpClient,
              public loadingController: LoadingController,
              public alertController: AlertController,
              public toastController: ToastController,
              public renderer: Renderer,
              public apiProvider: ApiProvider,
              public storage: Storage,
              public platform: Platform,
              public app: App) {    
      }       
                
  ngOnInit(){    
    this.buttonDisabled = true;   
    this.dropdown1 = 'Test';
   // this.strData = 'No Products in Cart';
    this.viewCartApi();
    this.showLoadingControllerLaunch();
    if (localStorage.getItem('products')) {
      this.productsLocalCart = JSON.parse(localStorage.getItem('products')); // get product list 
        console.log('****** filled' + localStorage.getItem('products'));
        //this.showToastOnFilledCart();
        this.showToastOnEmptyCart();
        this.strDataLocal = 'Cart is Empty.Please add items!';
      } 


      else if (!Array.isArray(this.productsLocalCart) || !this.productsLocalCart.length) {
        this.showToastOnEmptyCart();
    }

    else {  
      console.log('****** empty' + localStorage.getItem('products'));
      // this.strDataLocal = 'Cart is Empty.Please add items!';
      //this.showToastOnEmptyCart();
    }
   
     this.obj = JSON.stringify(this.productsLocalCart);
    for(let i = 0; i < this.productsLocalCart.length; i++){   
      if(this.productsLocalCart[i].ProductQuantity && this.productsLocalCart[i].ProductRegularPrice && this.productsLocalCart[i].ProductDescription && this.productsLocalCart[i].ProductId ){
       // this.strProductQuantity;
          this.strProductQuantity = this.productsLocalCart[i].ProductQuantity;
        this.strProductRegularPrice = this.productsLocalCart[i].ProductRegularPrice; 
        this.strProductDescription= this.productsLocalCart[i].ProductDescription; 
        this.strProductName= this.productsLocalCart[i].ProductName; 


         this.strProductRegularPriceRevised1 = this.strProductRegularPriceRevised;
        // this.strproductpriceTushar = 'Product Price: ' + this.strProductRegularPrice * this.strProductQuantity;
        console.log('All Product Price ' + this.productsLocalCart[i].ProductRegularPrice);
        console.log('All Product Quantity ' + this.productsLocalCart[i].ProductQuantity);
          this.productTotalPrice = this.productsLocalCart[i].ProductRegularPrice;
          var sum = 0, nums = ['100','300','400','60','40'];
          for (i = 0; i < nums.length; i++) {
              sum += +nums[i];
            //  console.log('All  TotalPrice ' + sum);
          }

          this.productsLocalCart = JSON.parse(localStorage.getItem('products'));
          // console.log('All  TotalPrice--- ' +  localStorage.getItem('products'));
//tempJSON.name is SomeName
      }
  
      else {
        console.log('Product quantity not available');
        this.showToastOnProductsQuantityCartLocally();
      }
     }
    
          
    this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'ViewcartPage') {
          if (nav.canGoBack()){
              this.navCtrl.setRoot(HomePage);
          } else {
          }
      }  
  });

  } 
  
  toggleIcon() {

    if (this.buttonIcon === 'star') {
      this.buttonIcon = "home";
    }
    else if (this.buttonIcon === 'home') {
      this.buttonIcon = "star";
    }
 }

 toggleIcon1() {

  if (this.buttonIcon1 === 'cart') {
    this.buttonIcon1 = "home";
  }
  else if (this.buttonIcon1 === 'home') {
    this.buttonIcon1 = "cart";  
  }
}
  
  checkOutPage() {
    // this.navCtrl.setRoot(TestingPage);
    if (localStorage.getItem("Userid value") === null) {
      this.navCtrl.setRoot(DemoPage);
      this.strUserId = localStorage.getItem("Userid value");
      this.showToastOnUserIdNull();
    }

    else { 
     
      this.navCtrl.setRoot(TestingPage);
    }

  }       


  clickOptionFlatRate(){
    this.loaderFlatRate();
    this.strSubTotalAmountFlatRate = '$' + this.strSubTotalAmount + 5;
    console.log("hello you clicked Flat rate" + this.strSubTotalAmountFlatRate);
    this.numberResult = this.strSubTotalAmount + 5;
    this.strSubTotalAmount = this.numberResult;
    console.log("Updated Flat Rate " +  'NZD ' + '$' +  this.numberResult);
  }

  clickOptionLocal(){
   
    this.strSubTotalAmount = this.total;  
    console.log("hello you clicked local" + this.strSubTotalAmount);
  }

  
 
  doRefresh(event) {
    console.log('Begin async operation');
    this.viewCartApi();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
      
    }, 500);  
  }
 

  productcategoryDetailPage(product_id,name) {
    console.log('Product Id--' + product_id);
    console.log('Product Name--' + name);  
    this.strTestProductId = product_id;
  }
    
 

 

 

    
           
        
      
  toggleAccordion() {  
    if (this.accordionExpanded) {
      this.renderer.setElementStyle(
        this.cardContent.nativeElement,
        "max-height",
        "0px"
      );
      this.renderer.setElementStyle(
        this.cardContent.nativeElement,
        "padding",
        "0px 16px"
      );
    } else {
      this.renderer.setElementStyle(            
        this.cardContent.nativeElement,
        "max-height",
        "500px"
      );
      this.renderer.setElementStyle(
        this.cardContent.nativeElement,
        "padding",
        "13px 16px"
      );
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }
  
  toggleAccordion1() {
    if (this.accordionExpanded1) {
      this.renderer.setElementStyle(
        this.cardContent1.nativeElement,
        "max-height",
        "0px"
      );
      this.renderer.setElementStyle(
        this.cardContent1.nativeElement,
        "padding",
        "0px 16px"
      );
    } else {
      this.renderer.setElementStyle(
        this.cardContent1.nativeElement,
        "max-height",
        "500px"
      );
      this.renderer.setElementStyle(
        this.cardContent1.nativeElement,
        "padding",
        "13px 16px"
      );
    }

    this.accordionExpanded1 = !this.accordionExpanded1;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }       
               
  // 11th Nov 2020  

incrementValue(index: number) {
  if(this.productsLocalCart){
    console.log('Tushar called')
    if(this.viewCartList[index].product_id === this.eventCartNumber) {
      console.log('success even');
       this.viewCartList[index].quantity += 2;  
  this.testTushar =  this.viewCartList[index].quantity;
  this.buttonDisabled = false;
  console.log('testTushar incrementValue even ' + this.testTushar);
    }
    else {
      console.log('success odd');
      this.viewCartList[index].quantity ++;  
  this.testTushar =  this.viewCartList[index].quantity;
  console.log('tushar' + this.viewCartList[index].quantity);
  this.testArray1 = this.viewCartList[index].quantity;
  this.testArray2 = this.testTushar;
  console.log('Tushar here' + this.testArray1 );
  console.log('Tushar here' + this.testArray2 );
  console.log('Increased Quantity odd' +  this.viewCartList[index].quantity);
  console.log('Increased ProductId odd' +  this.viewCartList[index].product_id);
  this.buttonDisabled = false;
  console.log('testTushar incrementValue odd ' + this.testTushar);
    }
  }  
  
  else {
    if(this.viewCartList[index].product_id === this.eventCartNumber) {
      console.log('success even');
       this.viewCartList[index].quantity += 2;  
  this.testTushar =  this.viewCartList[index].quantity;
  this.buttonDisabled = false;
  console.log('testTushar incrementValue even ' + this.testTushar);
    }
    else {
      console.log('success odd');
      this.viewCartList[index].quantity ++;  
  this.testTushar =  this.viewCartList[index].quantity;
  console.log('tushar' + this.viewCartList[index].product_id);
  this.testArray1 = this.viewCartList[index].product_id;
  this.testArray2 = this.testTushar;
  console.log('Tushar here' + this.testArray1 );
  console.log('Tushar here' + this.testArray2 );
  //console.log('Increased Quantity odd' +  this.viewCartList[index].quantity);
 // console.log('Increased ProductId odd' +  this.viewCartList[index].product_id);
  this.buttonDisabled = false;
  console.log('testTushar incrementValue odd ' + this.testTushar);
    }
  }
}

incrementValueLocal(index,item){
  // console.log('Local removed' + item);
  // this.strValue = item++;
  // console.log('Local removed' + this.strValue);
  if(this.productsLocalCart[index].ProductId === this.eventCartNumber) {
    console.log('success even');
     this.productsLocalCart[index].ProductQuantity += 2;  
this.testTushar =  this.productsLocalCart[index].ProductQuantity;
this.buttonDisabled = false;
console.log('testTushar incrementValue even ' + this.testTushar);
  }
  else {
    console.log('success odd');
    this.productsLocalCart[index].ProductQuantity ++;  
this.testTushar =  this.productsLocalCart[index].ProductQuantity;
console.log('tushar' + this.productsLocalCart[index].ProductQuantity);
this.testArray1 = this.productsLocalCart[index].ProductQuantity;
this.testArray2 = this.testTushar;
console.log('Tushar here' + this.testArray1 );
console.log('Tushar here' + this.testArray2 );
console.log('Increased Quantity odd' +  this.productsLocalCart[index].ProductQuantity);
console.log('Increased ProductId odd' +  this.productsLocalCart[index].ProductId);
this.buttonDisabled = false;
console.log('testTushar incrementValue odd ' + this.testTushar);
  }
}

decrementValueLocal(index,item){

  
  if(this.productsLocalCart[index].ProductQuantity<=1) {
    console.log('failure');
    this.showToastOnCart();
  }
 
  else if(this.productsLocalCart[index].ProductId === this.eventCartNumber) {
    console.log('success even');
     this.productsLocalCart[index].ProductQuantity -= 2;  
this.testTushar =  this.productsLocalCart[index].ProductQuantity;
this.buttonDisabled = false;
console.log('testTushar incrementValue even ' + this.testTushar);
  }
  else {
    console.log('success odd');
    this.productsLocalCart[index].ProductQuantity --;  
this.testTushar =  this.productsLocalCart[index].ProductQuantity;
console.log('tushar' + this.productsLocalCart[index].ProductQuantity);
this.testArray1 = this.productsLocalCart[index].ProductQuantity;
this.testArray2 = this.testTushar;
console.log('Tushar here' + this.testArray1 );
console.log('Tushar here' + this.testArray2 );
console.log('Increased Quantity odd' +  this.productsLocalCart[index].ProductQuantity);
console.log('Increased ProductId odd' +  this.productsLocalCart[index].ProductId);
this.buttonDisabled = false;
console.log('testTushar incrementValue odd ' + this.testTushar);
  }
}

// incrementValue(index: number) {  
//   if(this.productsLocalCart[index].ProductId === this.eventCartNumber) {
//     console.log('success even');
//      this.productsLocalCart[index].ProductQuantity += 2;  
// this.testTushar =  this.productsLocalCart[index].ProductQuantity;

// this.buttonDisabled = false;

// console.log('testTushar incrementValue even ' + this.testTushar);
//   }
//   else {
//     console.log('success odd');
//     this.productsLocalCart[index].ProductQuantity ++;  
// this.testTushar =  this.productsLocalCart[index].ProductQuantity;


// console.log('tushar' + this.productsLocalCart[index].ProductId);
  

// this.testArray1 = this.productsLocalCart[index].ProductId;
// this.testArray2 = this.testTushar;


// console.log('Tushar here' + this.testArray1 );
// console.log('Tushar here' + this.testArray2 );



// //console.log('Increased Quantity odd' +  this.viewCartList[index].quantity);
// // console.log('Increased ProductId odd' +  this.viewCartList[index].product_id);
// this.buttonDisabled = false;

// console.log('testTushar incrementValue odd ' + this.testTushar);

//   }
// }
                               
decrementValue(index: number,strDynamicId) {


if(this.viewCartList[index].quantity<=1) {
  console.log('failure');
  this.showToastOnCart();
}

else {
  if(this.viewCartList[index].product_id === this.eventCartNumber && this.viewCartList[index].quantity<=2) {
    console.log('no decrement ');
     
  }

  else if(this.viewCartList[index].product_id === this.eventCartNumber ) {
     this.viewCartList[index].quantity -= 2;  
  this.testTushar =  this.viewCartList[index].quantity;
  //console.log('Decreased Quantity even ' +  this.viewCartList[index].quantity );
  //console.log('Decreased ProductId even ' +  this.viewCartList[index].product_id);
  this.buttonDisabled = false;

  console.log('testTushar decrementValue even ' + this.testTushar);

  }

  else {
    console.log('success odd');
    this.viewCartList[index].quantity --;  
  this.testTushar =  this.viewCartList[index].quantity;
  //console.log('Decreased Quantity odd' +  this.viewCartList[index].quantity);
  //console.log('Decreased ProductId odd' +  this.viewCartList[index].product_id);
  this.buttonDisabled = false;
  console.log('testTushar decrementValue odd ' + this.testTushar);
  }
  } 
}  
   
  /*
      Update Shopping Cart button
  */               
updateShoppingCart(){
   console.log('Updated  Product Quantity ' +  this.testTushar);
   console.log('Updated  Product Id ' +  this.strDynamicId);
   this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + this.strTestProductId+ '&quantity=' + this.testTushar).subscribe((jsonResponse) => {
    this.obj = JSON.stringify(jsonResponse);
   this.showToastOnAddingCart();
   this.viewCartApi();
  });
}   

  /*
      Remove Particular product from cart
  */ 

removeProductServer(product_id,name){  
  this.showCartRemovalServer(product_id,name);

//   const postParams = {product_id: product_id};
//   this.httpClient.post('http://busybanda.com/sterling-tools/api/remove_cart_item?', JSON.stringify(postParams)).subscribe(async (response: Response) => {
//     this.obj = JSON.stringify(response); 
//     console.log('Data' + this.obj);
//     this.showToastOnDeletingCart();
//     this.viewCartApi();
// });          
}

  /*
      Remove Product from local storage cart
  */

removeProductLocally(index,item,name)
{
    this.showCartRemovalAlert2(index,item,name);
}  
  /*
      viewCartApi
  */

  async viewCartApi() {          
    this.presentLoading();
    try {
      const service = this.apiProvider.getCartDetails();  
      service.subscribe(async (data) => {
        if (data) {
          const resultado = data;  
          // console.log(resultado);
          this.viewCartList = resultado;     
          this.obj = JSON.stringify(data);
           console.log('All Json Response' + this.obj);             
           this.strDataServer = 'Cart is Empty.Please add items!';
        var result=[];
 
        console.log('Tushar' + this.viewCartList[0].product_id);
          for( var i=0; i < this.viewCartList.length; i++){
            var arr = []; // create array
            var ii = i;
            this.total += parseInt(this.viewCartList[i].price);
            this.strDynamicId = this.viewCartList[i].product_id;
            this.strDynamicProductQuantity  = this.viewCartList[i].quantity;
           }

          // tslint:disable-next-line: no-duplicate-variable
          for (var i=0; i < this.viewCartList.length; i++) {
            result.push(this.strDynamicId);
      }
 
          //  console.log('Total Price of Products ' + this.total);
           this.strSubTotalAmount = this.total;  
           this.strQuantityUpdated = this.total1 * 2;
           localStorage.setItem('name', this.strSubTotalAmount);
         

          // tslint:disable-next-line: one-variable-per-declaration
          let size = 0,keyPrice,keyProductId;

          for (keyPrice in this.viewCartList) {
            if (this.viewCartList.hasOwnProperty(keyPrice)) { 
              size++;
              const priceValue = this.viewCartList[keyPrice].price;
              this.viewCartList[keyPrice].price = priceValue;

               if (priceValue === "") {
                this.viewCartList[keyPrice].price = "No price Defined";
              } else {
                this.strPriceValue = priceValue;
                this.strNumber = priceValue.concat('price');
              }
            }    
          }       

          for (keyProductId in this.viewCartList) {
            if (this.viewCartList.hasOwnProperty(keyProductId)) { 
              size++;
              const productIdValue = this.viewCartList[keyProductId].product_id;
              this.viewCartList[keyProductId].product_id = productIdValue;

               if (productIdValue === "") {
                //this.viewCartList[keyPrice].price = "No Product Id Defined";
              } else {
                this.strProductIdValue = productIdValue;
                //this.strNumber = priceValue.concat('price');

                console.log('Value got ' + productIdValue);
              }
            }
          }
        
        } else {
        }  

      });
    } catch (error) {}
  }


 

  productcategoryDetailPage1(product_id,name) {
    console.log('Product Id----' + product_id);
    console.log('Product Name-----' + name);
    this.strTestProductId = product_id;
  }

  async showLoadingControllerLaunch() {


    const { Network } = Plugins;
    this.networkListener = Network.addListener(
      'networkStatusChange',
      (status) => {
        console.log('Network status HomePage here', status);
        this.networkStatus = status;
      }
    );

    if ((await Network.getStatus()).connectionType === 'none') {
      this.showNetworkAlert();
      console.log('Network status not available', this.networkStatus);
    } else {
      this.networkStatus = await Network.getStatus();
      console.log('Network status available', this.networkStatus);
     this.presentLoadingDefault();
    }
  }
 


 


  private async showNetworkAlert(): Promise<void> {
    // omitted;
    const alert = await this.alertController.create({
      title: 'Network Issues!',
      message: 'There are issues in network connectivity',

      buttons: [
        {
          text: 'Ok',
          handler: (ok) => {
            console.log('Confirm Ok');
            // resolve('ok');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            console.log('Confirm Cancel');
            alert.dismiss();
            // resolve('cancel');
          },
        },
      ],
    });

    alert.present();  
  }

  private async showCartRemovalAlert(dynamicId): Promise<void> {
    // omitted;
    const alert1 = this.alertController.create({
      title: 'Remove Item!',
      message: 'Do you want to remove items from cart!',
      enableBackdropDismiss: false,
  
      buttons: [
        {
          text: 'Ok',
          handler: (ok) => {
            console.log('Confirm Ok');

            this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?' + 'product_id=' + dynamicId ).subscribe((jsonResponse) => {
              this.obj = JSON.stringify(jsonResponse);
              console.log("Delete productsList response " + this.obj);
              console.log("Delete productsList id " + dynamicId);
           
             this.showToastOnDeletingCart();
             this.viewCartApi();
            });
            },
          },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          
          handler: (cancel) => {
            console.log('Confirm Cancel');
            alert1.dismiss();
            // resolve('cancel');
          },
        },
      ],
    });

    alert1.present();
  }

  public async showCartRemovalServer(product_id,name): Promise<void> {
    // omitted;
    const alert1 = this.alertController.create({
      title: 'Remove Item! ' + name,
      message: 'Do you want to remove item from cart!',
      enableBackdropDismiss: false,
  
      buttons: [
        {
          cssClass: 'my-custom-class',
          text: 'Ok',
          handler: (ok) => {
        
        //     console.log('Remove Product: ' + product_id);
        //     if(localStorage.getItem('isSigned'))
        //     {
        //     console.log('User Status ' + 'isSigned true');
        //     this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?'+'product_id='+ product_id).subscribe((jsonResponse) => {
        //     this.obj = JSON.stringify(jsonResponse);
        //     console.log('Data' + this.obj);
        //     this.showToastOnDeletingCart();
        //     this.viewCartApi();
        //  // this.navCtrl.setRoot(HomePage);
        //   });
        //     }
          
        //     else {
        //       console.log('isSigned status: ' + 'isSigned false');
        //     }

        this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?'+'product_id='+ product_id).subscribe((jsonResponse) => {
            this.obj = JSON.stringify(jsonResponse);
            console.log('Data' + this.obj);
            this.showToastOnDeletingCart();
            this.viewCartApi();
          });
            },
          },
          {
            text: 'Cancel',
            handler: data => {
              let navTransition = alert1.dismiss();
              //  navTransition.then(() => {
              //    this.navCtrl.pop();
              //  });
             return false;
           }
        },
      ],
    }); 

    alert1.present();
  }

  private async showCartRemovalAlert2(index,item,name): Promise<void> {
    // omitted;
    const alert1 = this.alertController.create({
      title: 'Remove Item! ' + name,
      message: 'Do you want to remove item from cart locally!',
      enableBackdropDismiss: false,
  
      buttons: [
        {  
          cssClass: 'my-custom-class',
          text: 'Ok',
          handler: (ok) => {
            console.log('Confirm Ok');
            console.log('Remove Product: ' + item);
            for(let i = 0; i < this.productsLocalCart.length; i++) {

    if(this.productsLocalCart[i] == item){
      this.productsLocalCart.splice(i, 1);
      localStorage.setItem('products', JSON.stringify(this.productsLocalCart));
    }

   
            










             
            }},
          },
          {
            text: 'Cancel',
            handler: data => {
              let navTransition = alert1.dismiss();
              //  navTransition.then(() => {
              //    this.navCtrl.pop();
              //  });
             return false;
           }
        },
      ],
    }); 

    alert1.present();
  }
  presentLoadingDefault() {
    let loading = this.loadingController.create({
      content: 'Please wait Viewing Cart...'
    });
  
    loading.present();
  
    setTimeout(() => {
       loading.dismiss();
      
    }, 300);
  }

  async showToastOnPageLoad() 
  {
    // this.strContent = this.strContent.replace(/\n/g, "<br />");

    const toast = await this.toastController.create({
      message:  localStorage.getItem('Product Title' ) ,
    
      duration: 6000,
      position: 'bottom',
    });
    toast.present();
  }


  async showToastOnEmptyCart() 
  {
    // this.strContent = this.strContent.replace(/\n/g, "<br />");

    const toast = await this.toastController.create({
      message:  'Cart is empty.Please add items!' ,
    
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  async showToastOnFilledCart() 
  {
    // this.strContent = this.strContent.replace(/\n/g, "<br />");

    const toast = await this.toastController.create({
      message:  'Cart is filled.Please wait, loading items!' ,
    
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }



  async showToastOnCart()
  {
   const toast = await this.toastController.create({
     message: 'Minimum product quantity cannot be less than 1 ',
     duration: 400,
     position: 'bottom',
   });
   toast.present();
 } 

 async showToastOnProductsRemovedCartLocally()
 {
  const toast = await this.toastController.create({
    message: 'Product removed from cart' + this.strProductTitle,
    duration: 1400,
    position: 'bottom',
  });
  toast.present();
} 

async showToastOnProductsQuantityCartLocally()
{
 const toast = await this.toastController.create({
   message: 'Product Quantity not available from cart',
   duration: 4000,
   position: 'bottom',
 });
 toast.present();
} 

async showToastOnAddingEmptyCart()
{
 const toast = await this.toastController.create({
   message: 'Please add quantity of product',
   duration: 300,
   position: 'bottom',
 });
 toast.present();
} 



async showToastOnUserIdNull()
{
 const toast = await this.toastController.create({
   message: 'Please Login in the application',
   duration: 3000,
   position: 'bottom',
 });
 toast.present();
} 

async showToastOnAddingCart()
{
 const toast = await this.toastController.create({
   message: 'Product quantity Updated in cart ',
   duration: 1300,
   position: 'bottom',
 });
 toast.present();
} 

async showToastOnDeletingCart()
{
 const toast = await this.toastController.create({
   message: 'Product Deleted in cart ' + this.obj,
   duration: 1500,
   position: 'bottom',
 });
 toast.present();
}    
             
async presentLoading() {
  const loading = await this.loadingController.create({
    content: "Please wait fetching data !",
    duration: 400,
  });
  return await loading.present();
}
  
async loaderFlatRate() {
  const loading = await this.loadingController.create({
    content: "Please wait updating rate !",
    duration: 600,
   
  });
  return await loading.present();
}

  

}

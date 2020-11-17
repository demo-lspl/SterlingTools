
import { Storage } from '@ionic/storage';
import { ApiProvider } from './../../providers/api/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, Platform, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-testcart',
  templateUrl: 'testcart.html',
})
export class TestcartPage implements OnInit{

 
  strSubTotalAmount:number | any;   
  strData:string;

  obj;
  strPriceValue: number;  
  strNumber:number;
  strDynamicId:number;
  strDynamicId1:'';
  strDynamicProductQuantity:number ;
  valueQuantity:number ;
  eventCartNumber:number = 127890;
  buttonDisabled;
  viewCartList: any = [];
  product_id:string;
  name:string;



  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public toastController: ToastController,
    public apiProvider: ApiProvider,
    public storage: Storage,
   ) {  
  }       
    
  ngOnInit(){
    this.viewCartApi();
  }
  
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
          // console.log('View Cart Api Response ' + this.obj);
           this.strData = 'No Products in Cart';
          var total = 0; 
          var totalprice = 0;  
         

          for (const entry of this.viewCartList) {

            console.log(entry.product_id);

            this.strDynamicId = entry.product_id;
          }
          
         
         
      
          
        } else {
        }
      });
    } catch (error) {} 
  }

 


  productcategoryDetailPage(product_id,name) {
    // this.navCtrl.push(ProductcategorydetailPage, {
    //   catId: catId,
    //   name:name
    // });
    console.log('Product Id--' + product_id);
    console.log('Product Name--' + name);

     
  }
 
  doRefresh(event) {
    console.log('Begin async operation');
    this.viewCartApi();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
      
    }, 500);
  }
                   
  incrementValue1(index: number,strDynamicId) {
    if(this.viewCartList[index].product_id === this.eventCartNumber) {
      console.log('success even');
       this.viewCartList[index].quantity += 2;  
  this.valueQuantity =  this.viewCartList[index].quantity;
 
  this.buttonDisabled = false;

    } 
    else {
      console.log('success odd');
      this.viewCartList[index].quantity ++;  
  this.valueQuantity =  this.viewCartList[index].quantity;

  this.buttonDisabled = false;


    }
  } 
                                 
  decrementValue1(index: number,strDynamicId) {
  
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
      this.valueQuantity =  this.viewCartList[index].quantity;
      this.buttonDisabled = false;
    
    
      }
    
      else {
        console.log('success odd');
        this.viewCartList[index].quantity --;  
      this.valueQuantity =  this.viewCartList[index].quantity;
      this.buttonDisabled = false;
      }
      } 
  }        
   
updateShoppingCart(strDynamicId){
  console.log('Update Product Id ' + strDynamicId  );
  console.log('Update Product Quantity ' + this.strDynamicId1  );

  // product_id: 162207
  // product_id: 162174



}      


   
removeProduct(strDynamicId){    
  console.log('Remove Product: ' + strDynamicId);
  this.httpClient.get('http://busybanda.com/sterling-tools/api/remove_cart_item?'+'product_id='+ this.strDynamicId).subscribe((jsonResponse) => {
    this.obj = JSON.stringify(jsonResponse);
    console.log('Data' + this.obj);
    this.viewCartApi();
});
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

async showToastOnCart()
  {
   const toast = await this.toastController.create({
     message: 'Minimum product quantity cannot be less than 1 ',
     duration: 1500,
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

  
async presentLoading() {
  const loading = await this.loadingController.create({
    content: "Please wait fetching data !",
    duration: 400,
  });
  return await loading.present();
}
}

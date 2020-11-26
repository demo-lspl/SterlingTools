



import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, App, IonicPage, LoadingController, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { ApiProvider } from '../../providers/api/api';
import { ProductcategorydetailPage } from '../productcategorydetail/productcategorydetail';




@IonicPage()
@Component({
  selector: 'page-readmore',
  templateUrl: 'readmore.html',
})
export class ReadmorePage implements OnInit{


  
obj;
  productsListInformation: any = [];
  productsListInformation1: any = [];
  strId:string
  dynamicId;
  strProductName: string;
  strProductRegularPrice: string;
  strProductRegularPriceRevised: string;
  strProductSalePrice:string;
  strProductMake: string;
  strProductModel:string;   
  strProductYear:string;
  strProductDescription: string;
  strProductUrl: string;
  strProductStatus: string;
  strProductCreatedDate: string;
  strProductModifiedDate: string;
  strImage:string;
  strStock:string;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 
  buttonIcon: string ;
  viewCartList:any = [];
  countProductsCart:number|any|string;
  strData: string;




  





  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public platform: Platform,
              public loadingController: LoadingController,
              public app: App,
              public httpClient: HttpClient,
              public alertController: AlertController,
              public apiProvider: ApiProvider) {

                this.strId = navParams.get("id");
                this.dynamicId = this.strId;
  }
  


  ngOnInit(){

    this.checkNetwork();

    this.viewCartApi();


  
      this.showLoadingControllerLaunch();
  
      this.platform.registerBackButtonAction(() => {
        // Catches the active view
        let nav = this.app.getActiveNavs()[0];
        let activeView = nav.getActive();                
        // Checks if can go back before show up the alert
        if(activeView.name === 'ReadmorePage') {
            if (nav.canGoBack()){  
                this.navCtrl.setRoot(ProductcategorydetailPage);
            } else {
            }
        }
    }); 
  
   
               
  
    
      
      this.httpClient
        .get(
          "http://busybanda.com/sterling-tools/api/get_products_by_id?" +
            "id=" +
            this.dynamicId
        )
        .subscribe((jsonResponse) => { 
        
          this.productsListInformation = jsonResponse['result'];
          this.productsListInformation1 = jsonResponse['result'].attribute;
        this.obj = JSON.stringify(jsonResponse);
           
         if (this.productsListInformation && this.productsListInformation.length) {
          console.log('Particular product details available ' );
            
         } 
        else     
        {     
          console.log('Particular product empty ' + this.obj);
        } 
  
        for (const entry of this.productsListInformation) {
          this.strProductName =  'Product Name: ' + entry.name;
          this.strProductRegularPrice = '' + entry.regular_price;
          this.strProductRegularPriceRevised = 'Product Regular Price: '+  this.strProductRegularPrice.replace('Product Regular Price:','' + '$');
          this.strImage = entry.image;
          console.log('Image Path ' + entry.image);
           if(this.strProductMake){
            this.strProductMake = 'Make Empty: '; 
           }
  
           else {
            this.strProductMake = 'Make: ' + entry.attribute.pa_make; 
           }
  
           if(this.strProductModel){
            this.strProductModel = 'Model Empty: '; 
           }
  
           else {
            this.strProductModel = 'Model: ' + entry.attribute.pa_model; 
           }
  
           if(this.strProductYear){
            this.strProductYear = 'Year Empty: '; 
           }
  
           else {
            this.strProductYear = 'Year: ' + entry.attribute.pa_year; 
           }
  
          if(this.strProductSalePrice){
            this.strProductSalePrice = 'Product Sale Price: ' + entry.sale_price;
          }
  
          else {
            this.strProductSalePrice = 'No Product Sale Price Specified';
          }    
            
    
          if (entry.description === '') {
            this.strProductDescription = 'No Product Description:  ';
          }
   
          else {                 
            this.strProductDescription =  entry.description;
          }     
  
          if (entry.description === '') {
            this.strProductDescription = 'No Product Description:  ';
          }
   
          else {
            this.strProductDescription = 'Product Description: ' + entry.description;
          } 
          
          if (entry.stock === null) {
            this.strStock = 'No Product Stock:  ';
          }
   
          else {
            this.strStock = 'Product strStock: ' + entry.stock;
          } 
    
    
          // if(this.strStock){
          //   this.strStock = 'Stock Empty: '; 
          //  }
  
          //  else {
          //   this.strStock = 'Stock: ' + entry.stock; 
          //  }
  
          console.log(this.strProductRegularPrice);
        }
  
        for (const entry of this.productsListInformation) {
        // console.log('Product Regular Price test' + entry.attribute);
        }
  
  
          const myArray = this.productsListInformation;
         myArray.forEach((attribute, index, array) => {
            console.log('Status response: ' + attribute.pa_make); // 100, 200, 300
           console.log(array);
            if (attribute.pa_make &&attribute.pa_make.length
            ) {
               console.log("Success..." + attribute.pa_make[0].title);
            } else {
              console.log("Success...!!!!!!!!");
              // this.strTaxonomyProductBrandTag = "No Tag Available";
            }
  
  
            if (attribute.pa_make &&attribute.pa_make.length
              ) {
                 console.log("Success..." + attribute.pa_model[0].title);
              } else {
                console.log("Success...!!!!!!!!");
                
              }
              
           
         });
        });
    
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
      
           if(this.viewCartList.length>=1) {
            console.log('Cart Filled ');
            this.countProductsCart = this.viewCartList.length;
             this.buttonIcon = "cart";
           }
  
           else{
            console.log('Cart Empty ');
           this.countProductsCart = 'Empty';
  
           }
        } else {
        }
  
      });
    } catch (error) {}
  }

  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: 'Please wait loading product details!'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    },600);
  }

  public async checkNetwork() {
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
        // this.showAlert();
        console.log('Network status available', this.networkStatus);
        //this.router.navigate(['/invoices']);
       // this.router.navigate(['/managecard']);
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

  
}

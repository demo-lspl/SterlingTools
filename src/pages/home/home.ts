



import { ViewallPage } from './../viewall/viewall';
import { DemoPage } from './../demo/demo';
import { WishlistupdatedPage } from './../wishlistupdated/wishlistupdated';
import { ProductcategorydetailPage } from './../productcategorydetail/productcategorydetail';
import { ViewcartPage } from "./../viewcart/viewcart";
import { ViewallcategoriesPage } from "./../viewallcategories/viewallcategories";
import { ApiProvider } from "./../../providers/api/api";
import { Component, OnInit, ViewChild, Input, Renderer, ElementRef } from "@angular/core";
import {NavController,ModalController,ToastController,LoadingController, Platform, App, AlertController,} from "ionic-angular";
import { ItemdetailPage } from "../itemdetail/itemdetail";
import { HttpClient } from "@angular/common/http";
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {  map} from 'rxjs/operators';
import { SearchPage } from '../search/search';
import { SearchproductsPage } from '../searchproducts/searchproducts';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { HelpPage } from '../help/help';


    
@Component({  
  selector: "page-home",           
  templateUrl: "home.html",
})
export class HomePage implements OnInit {
  productsLocalCart :any = [];
  viewCartList:any = [];
  element: HTMLImageElement; /* Defining element for changing src */
  accordionExpandedVehicle = false;
  accordionExpandedCategory = false; 
  @ViewChild("cc") cardContentVehicle: any;
  @ViewChild("cc1") cardContentCategory: any;  
  @Input("title") title: string;  
  @Input("title") Elem: string;
  strProductRegularPrice:string;
  strProductRegularPriceRevised: string;
  strData: string;
  strRegularPrice:string;
  hideMe:boolean = false;
  obj;
  icon: string = "arrow-forward";
  icon1: string = "arrow-forward";
  elements = document.getElementsByClassName("columngrid") as HTMLCollectionOf<HTMLElement>;
  localSearchProduct;
  items: any;
  val;
  featuredProductsList: any = [];  
  featuredCategoryList: any = [];    
  featuredProductCategoryList: any = [];
  productTitle:''
  strProductAdded:string;
  testStr = 'Hello, World,\nand all you beautiful people in it!';
  buttonIcon: string = "home";
  getIcon: string;
  countProductsCart:number|any|string;
  countProductsWishList:number =0;
  countProductsCartLocal:number = 0;
  countProductsCartLocalUpdated:number = 0;
  countProductsWishlistLocalUpdated:number = 0;
     
        
  count:string|any;
  strImagePath: string;
  public myimage = 'https://aws1.discourse-cdn.com/ionicframework/original/3X/c/f/cf7af661f0bae7cca915258f2b8d6b3937fccda4.png';
  strUserId:number | any;
  countClick: number = 0;
  countClickAddToCart: number = 0;
  countClickAddToCartTushar: number = 0;
  countClickAddToCartTushar1: number = 0;
  makeList: any = [];  
  modelList: any = [];  
  companyName: any;
  strMakeListValue:string;
  strModelListValue:string; 
  zone;
  modeKeys:any=[];
  httpClientFetch = [];
  makeValue:string;
  idValue:string;

  modelValue:string;
  varoutput :any = [] ;
  productCategoryList: any = [];  

  strCateid:string;
  engineValue:string;  
  yearValue:string;
  strMakeListSelectedValue:string;
  strModelListSelectedValue:string; 
  strEngineListSelectedValue:string;
  engineList: any = [];  
  yearList: any = [];  

  picToView:string='cart';   
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle; 

  strProductName:string;
  strDynamicId:string;
  wishListlength:string | any;
  strTestValue:string;

  strTestValue1:string;
  strTestValue2:string;
  strTestValue3:string;
  checkStatus: boolean;
  visible = false;



  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastController: ToastController,
    public apiProvider: ApiProvider,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public rendererVehicle: Renderer,
    public rendererCategories: Renderer,  
    public _elRef:ElementRef,
    public inAppBrowser: InAppBrowser,
    public platform: Platform,
    public app: App,
    public alertController: AlertController
  ) {

    this.checkStatus = this.localStorageItem();
  }     
                     
       
  ngOnInit() {      
    
      /*
          Local Wishlist
      */
      var productsWishlistarrayFromStorage = JSON.parse(localStorage.getItem('productsWishlist'));
      if (productsWishlistarrayFromStorage != null && productsWishlistarrayFromStorage.length > 0) {
        var arrayLength = productsWishlistarrayFromStorage.length;
        this.countProductsWishList = arrayLength;
        this.countProductsWishlistLocalUpdated = this.countProductsWishList;
        console.log('Local Wishlist filled ' + this.countProductsWishlistLocalUpdated);
  
      }        
   
      else {
        console.log('Local Wishlist empty ' );
      }
      /*
          Local Cart
      */
     var productsCartarrayFromStorage = JSON.parse(localStorage.getItem('products'));
     if (productsCartarrayFromStorage != null && productsCartarrayFromStorage.length > 0) {
       var arrayLength1 = productsCartarrayFromStorage.length;
       this.countProductsCart = arrayLength1;
       this.countProductsCartLocalUpdated = this.countProductsCart;
       console.log('Local Cart filled ' + this.countProductsCartLocalUpdated);
     }
 
     else {
       console.log('Local Cart empty ' );
     }
  


 
    this.checkNetwork();
    this.getAllProductsCategoriesList(); 
    if(this.countClick>1){
      console.log('Clicked More than one');
      this.showToastOnWishlist();
    }
    else {
    
  
    }
     this.rendererVehicle.setElementStyle(this._elRef.nativeElement, "webkitTransition","max-height 500px, padding 500ms");
     this.rendererCategories.setElementStyle(this._elRef.nativeElement, "webkitTransition","max-height 500px, padding 1200ms");
     this.getAllFeaturedProducts();
     this.getAllFeaturedProductsCategories();
     this.getCategoriesApi();
     this.viewCartApi();
     this.getMakeApi();

   
   

   

     this.platform.registerBackButtonAction(() => {
      // Catches the active view
      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
      if(activeView.name === 'HomePage') {
          if (nav.canGoBack()){ 
              this.platform.exitApp();
          } else {
               this.platform.exitApp();
          }
      }
  });  

   }


   toggle() {
    this.visible = !this.visible;
   }


   public localStorageItem(): boolean {
    if (localStorage.getItem("isSigned") === "true") {
      console.log('isSigned true');
      return true
    } else {
      console.log('isSigned false');
      return false;
    };
  }


   hide(){
    if(this.hideMe){
      console.log('Current State' + this.hideMe);
      this.hideMe=false;
    }
  
    else {
      console.log('Current State..' + this.hideMe);
      this.hideMe=true;
    }
  
    }

  

   addEvent(){
  	if(this.myimage=='https://aws1.discourse-cdn.com/ionicframework/original/3X/c/f/cf7af661f0bae7cca915258f2b8d6b3937fccda4.png')
  	{
  		this.myimage='https://aws1.discourse-cdn.com/ionicframework/original/3X/e/5/e5001dfda25e215c0304eb79a9637d7fbd53ca73.png';
  	}else{
		this.myimage = 'https://aws1.discourse-cdn.com/ionicframework/original/3X/c/f/cf7af661f0bae7cca915258f2b8d6b3937fccda4.png';
    }
         
        
  }     
  
  slides = [    
    {
      // title: "Under Rs. 699",
      title: "",
      description: "",
      smalltext: "",
      image: "assets/imgs/slider-12.jpg",
    },
    {
      // title: "Under Rs. 699",
      title: "",
      description: "",
      smalltext: "",
      image: "assets/imgs/slider-13.jpg",
    },
    {
      // title: "Under Rs. 699",
      title: "",
      description: "",
      smalltext: "",
      image: "assets/imgs/slider-12.jpg",
    },
  ];  


  toggleIcon() {

    if (this.buttonIcon === 'star') {
      this.buttonIcon = "home";
    }
    else if (this.buttonIcon === 'home') {
      this.buttonIcon = "star";
    }
 }  



//  addToCart(id,strProductAdded) {
//   this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
//     this.obj = JSON.stringify(jsonResponse);
//     console.log("Sent productsList response " + this.obj);
//     console.log("Sent productsList id " + id);
//     this.showToastOnAddProductSingle(strProductAdded);
//   }); 
// }    
      
  
addToCart(id, name,image,description,regular_price) {
  if (localStorage.getItem("Userid value") === null) {
    let products = [];
    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products')); // get product list 
    } 
    console.log("Sent productsList id " + id);
    console.log("Sent productsList name " + name);
    products.push({'ProductId' : id , 'ProductName' : name , 'ProductQuantity': '1' ,'ProductImage' : image ,'ProductDescription':description , 'ProductRegularPrice' : regular_price} ); 
    localStorage.setItem('products', JSON.stringify(products)); 
    this.showToastOnAddProductLocal(name);
    this.countProductsCartLocalUpdated++;

  
   
  }  
  
  else { 
    this.httpClient.get('http://busybanda.com/sterling-tools/api/set_cart_items?' + 'user_id=' + localStorage.getItem('Userid value') + '&product_id=' + id).subscribe((jsonResponse) => {
          this.obj = JSON.stringify(jsonResponse);
          console.log("Sent productsList response " + this.obj);
          console.log("Sent productsList id " + id);
          this.showToastOnAddProductServer(name);
          this.countProductsCart++;
        });
  }   
} 

addToWishList(id, name,image,description,regular_price,x) {

  this.visible = !this.visible;
  // this.countClick++;

  //   if(this.countClick>1){
  //     console.log('Clicked More than one');
  //     this.showToastOnWishlist();
  //   }
  //   else {
  //   }

  //x.classList.toggle("fa-thumbs-down");

 // document.getElementById("myDIV").classList.add("mystyle");

  
  let productsWishlist = [];
  if (localStorage.getItem('productsWishlist')) {
    productsWishlist = JSON.parse(localStorage.getItem('productsWishlist')); // get product list 
  } 
  console.log("Sent productsList id " + id);
  console.log("Sent productsList name " + name);
  productsWishlist.push({'ProductId' : id , 'ProductName' : name , 'ProductQuantity': '1' ,'ProductImage' : image ,'ProductDescription':description , 'ProductRegularPrice' : regular_price} ); 
  localStorage.setItem('productsWishlist', JSON.stringify(productsWishlist)); 
  this.buttonIcon = "home";
  this.showToastOnAddProductWishlist(name);
  this.countProductsWishlistLocalUpdated++;
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log('Code for localStorage/sessionStorage.')
  } else {
    // Sorry! No Web Storage support..
    console.log('Sorry! No Web Storage support..')
  }
} 
   
   
 cartPage() {
    this.navCtrl.push(ViewcartPage);
  }

  wishlistPage() {
    console.log('wishlistPage');
     this.navCtrl.push(WishlistupdatedPage);
   
  }
  
 doRefresh(event) {  
    console.log('Begin async operation');
    this.getAllFeaturedProducts();
    this.getAllFeaturedProductsCategories();
    this.viewCartApi();
    this.getMakeApi();
  
    
    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 500);
  }  
      
    


 listView() {
      this.showLoadingControllerListView();
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.width = "100%";
      }
    }

 gridView() { 
    this.showLoadingControllerGridView();
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.width = "50%";
    } 
  }

  viewAllCategories() {
   // this.navCtrl.push(ViewallcategoriesPage);
    this.navCtrl.push(ViewallPage);
  }


  productDetailPage1(catId) {


    if(this.companyName){
      console.log('clicked');
       this.navCtrl.push(SearchPage, {
      catId: catId,
     
    });
    console.log("Sent product id " + catId);
    }

    else {
      console.log('clicked!!!!!!');
      this.showToastOnEmptyProduct();
    }

   
  
  }

  productDetailPage(id, name,regular_price) {
    this.navCtrl.push(ItemdetailPage, {
      id: id,
      name: name,
      regular_price:regular_price
    });
    console.log("Sent product id " + id);
    console.log("Sent product name " + name);
    console.log("Sent product name " + regular_price);
    console.log('data added '+this.val);
  }

productcategoryDetailPage(catId,name) {
    this.navCtrl.push(ProductcategorydetailPage, {
      catId: catId,
      name:name
    });
  }

toggleAccordionVehicle() {
    if (this.accordionExpandedVehicle) {
      this.rendererVehicle.setElementStyle(
        this.cardContentVehicle.nativeElement,
        "max-height",
        "0px"
      );
      this.rendererVehicle.setElementStyle(
        this.cardContentVehicle.nativeElement,
        "padding",
        "0px 16px"
      );
    } else {
      this.rendererVehicle.setElementStyle(
        this.cardContentVehicle.nativeElement,
        "max-height",
        "500px"
      );
      this.rendererVehicle.setElementStyle(
        this.cardContentVehicle.nativeElement,
        "padding",
        "13px 16px"
      ); 
    }

    this.accordionExpandedVehicle = !this.accordionExpandedVehicle;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

toggleAccordionCategory() {  
    if (this.accordionExpandedCategory) {
      this.rendererCategories.setElementStyle(
        this.cardContentCategory.nativeElement,
        "max-height",
        "0px"
      );
      this.rendererCategories.setElementStyle(
        this.cardContentCategory.nativeElement,
        "padding",
        "0px 16px"
      ); 
    } else {
      this.rendererCategories.setElementStyle(
        this.cardContentCategory.nativeElement,
        "max-height",
        "1200px"
      );
      this.rendererCategories.setElementStyle(
        this.cardContentCategory.nativeElement,
        "padding",
        "13px 16px"
      );
    } 

    this.accordionExpandedCategory = !this.accordionExpandedCategory;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }
    
getAllFeaturedProducts() {
    
    const service = this.apiProvider.getFeaturedProducts();
    service.subscribe((jsonResponse) => {

      const resultado = jsonResponse;
      this.featuredProductsList = resultado;
      this.obj = JSON.stringify(jsonResponse);

      // this.httpClient.get('http://busybanda.com/sterling-tools/api/get_featured_product').subscribe(res => console.log(res.status), err => console.log('error', err.status))

  

        if(resultado === null){
          this.showToastOnEmptyFeaturedProducts();
          console.log('data not available');
          this.strData = 'data not available';
        }
        else {
          // console.log('data available');
        }
  
        
        
    });

  
  }  

getAllFeaturedProductsCategories() {
    
    const service = this.apiProvider.getProductCategoriesGrid();
    service.subscribe((jsonResponse) => {
  
      const resultado = jsonResponse;
      this.featuredProductCategoryList = resultado;
      this.obj = JSON.stringify(jsonResponse);

      this.strData = 'No data available';

        if(resultado === null){
          this.showToastOnEmptyFeaturedProducts();
        }
        else {
          //console.log('data available');
        }
    });
  }  

  getAllProductsCategoriesList() {
    
    const service = this.apiProvider.getProductCategories();
    service.subscribe((jsonResponse) => {
  
      const resultado = jsonResponse;
      this.productCategoryList = resultado;
      this.obj = JSON.stringify(jsonResponse);

      this.strData = 'No data available';

        if(resultado === null){
          this.showToastOnEmptyFeaturedProducts();
        }
        else {
         // console.log('data available getAllProductsCategoriesList' + this.obj);
        }


        

        for (const entry of this.productCategoryList) {
          // console.log('Dynamic Ids ' + entry.catId);
           this.strCateid = entry.catId;
        }



    });
  }


getCategoriesApi(){
    // console.log('getProductCategoriesApi called    ');  
    const service = this.apiProvider.getProductCategories();
    service.subscribe((data) => {
        const resultado = data;
        this.featuredCategoryList = resultado;
        this.productTitle = data.title;
    }); 
  }   
  
   
                      
    
 



  getCategories(value){
    console.info("Selected Product category : ",value);
    console.info("Selected Product strCateid : ",this.strCateid);
    // this.strModelListSelectedValue = modelValue;
  }

  testValue(){
    console.info('testValue');
  }

  testValue1(){
    console.info('testValue1');
  }

  getMakeApi(){     
    //console.log('getMakeApi called    ');
    const service = this.apiProvider.searchMakeCategories();
    service.subscribe((data) => {
        const resultado = data;
        this.makeList = resultado; 
        this.strMakeListValue =  resultado;
     });
  }  
    
  getModelApi(strMakeListSelectedValue){     
    console.log('getModelApi called    ');
    const service = this.apiProvider.getMakeCategories(strMakeListSelectedValue);
    service.subscribe((data) => {
        const resultado = data;
        this.modelList = resultado; 
        this.strMakeListSelectedValue =  resultado;
        this.strModelListSelectedValue =  resultado;
        this.strEngineListSelectedValue =  resultado;
        this.obj = JSON.stringify(data);
        console.log('Selected model tushar:  ' + this.strTestValue);
         
     });
  }       

  triggerMeModel(value: string): void {
    console.log("selected value", value);
    this.strTestValue1 = value;
    console.log("selected strTestValue1", this.strTestValue1);
    this.getEngineApi(this.makeValue,this.strTestValue1);
  }

  triggerMeEngine(value: string): void {
    console.log("selected value", value);
    this.strTestValue2 = value;
    console.log("selected strTestValue2", this.strTestValue2);
    this.getYearApi(this.makeValue,this.strTestValue1,this.strTestValue2);
  }

  triggerMeYear(value: string): void {
    console.log("selected value", value);
    this.strTestValue3 = value;  
    console.log("selected strTestValue3", this.strTestValue3);
    this.getYearApi(this.makeValue,this.strTestValue2,this.strTestValue3);
  }
  getEngineApi(strMakeListSelectedValue,strModelListSelectedValue){     
    console.log('getEngineApi called    ' + this.strTestValue1);
    const service = this.apiProvider.getEngineCategories(strMakeListSelectedValue,this.strTestValue1);
    service.subscribe((data) => {
        const resultado = data;
        this.engineList = resultado; 
        this.strMakeListSelectedValue =  resultado;
        this.strModelListSelectedValue =  resultado;
        this.strModelListSelectedValue =  this.modelValue;
        console.log('Engine api response  make ' + strMakeListSelectedValue);
        console.log('Engine api response  model ' + strModelListSelectedValue);

     });
  } 

  getYearApi(strMakeListSelectedValue,strModelListSelectedValue,strEngineListSelectedValue){     
    console.log('getYearApi called    ');
    const service = this.apiProvider.getYearCategories(strMakeListSelectedValue,strModelListSelectedValue,strEngineListSelectedValue);
    service.subscribe((data) => {
        const resultado = data;
        this.yearList = resultado; 
        this.strMakeListSelectedValue =  resultado;
        this.strModelListSelectedValue =  resultado;
        console.log('Engine api response   ' + resultado);
     });
  }    
  makeDropDownValue(){   
     this.strMakeListSelectedValue = this.makeValue;
     this.getModelApi(this.strMakeListSelectedValue);
     console.log("Selected make:  ", this.makeValue); 
    }

   
                 
  searchData(makeValue,strTestValue2,strTestValue3,year){

  

  if(!this.makeValue ){
    console.log('issue make');
    this.showToastOnEmptyMake();
  }
   else if(!this.strTestValue1){
    this.showToastOnEmptyModel();
    console.log('issue model');
  }

  else {
    console.log('success!!!!!!');
    this.navCtrl.push(SearchproductsPage, 
        {
          make: this.makeValue,
          model: this.strTestValue2,
          engine:this.strTestValue1,
          year:this.yearValue
        });

        console.log("Sent product make " + this.makeValue);
        console.log("Sent product model " + this.strTestValue2);
        console.log("Sent product engine " + this.strTestValue1);
        console.log("Sent product year " + this.yearValue);
  }
  }        
 
  


    
   
   

  
  searchData1(catId){

    // this.httpClient.get( "http://busybanda.com/sterling-tools/api/get_products_mmey_search?" + "make=" +this.makeValue + '&model=' + this.strModelListSelectedValue + '&engine=' + this.strEngineListSelectedValue)
    // .subscribe((jsonResponse) => { 
    //   this.obj = JSON.stringify(jsonResponse);
    //   console.log('searchData api response   ' + jsonResponse);
    // });

 
    // this.navCtrl.push(SearchPage, {
    //   catId: catId,
           
    //     });    

        if(this.productCategoryList){
          console.log("productCategoryList has data " + this.productCategoryList.length + catId );
        }
        else {
          console.log("productCategoryList does not have data " );

        }
  
         
  }  

  getOuterName(event){
    console.log("companyName"+this.companyName);
    this.strDynamicId = this.companyName;
 }


  itemdetailPage(catId) {
    console.log("itemdetailPage called " );
    // this.navCtrl.push(ProductcategorydetailPage, {
    //   catId: catId,
    //   name:name
    // });
    console.log('Sent productsList id ' + catId);
  } 
 
 
     

readMoreLocal(id, name,image,description,regular_price){
  this.showToastOnPriceEmptyProducts();
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
  
         console.log('All Json Response' + resultado);
  
            
              
     
         if(this.viewCartList.length>=1) {
          console.log('Live server Cart Filled ' + this.viewCartList.length );
          this.countProductsCart = this.viewCartList.length;
          //  this.buttonIcon = "cart";
         }

         else{
          console.log('Live server Cart  Empty ');
        // this.countProductsCart = 'Empty';

         }



       
                              
        // for(var j=0; j < this.viewCartList.length; j++){
        //   console.log('Price ' + this.viewCartList[j].price);
        //   console.log('Product Id ' + this.viewCartList[j].product_id);
        //   console.log('Quantity' + this.viewCartList[j].quantity);
        //  }
        // const resultado1 = data;
        // console.log(resultado1);
      } else {
      }

    });
  } catch (error) {}
}
  
  showToastOnAlreadyLoggedIn() {
    const toast = this.toastController.create({
      message: "User already logged in!",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }              
    
  showToastOnEmptyFeaturedProducts() {
    const toast = this.toastController.create({
      message: "Products not available!",
      duration: 1000,
      position: "bottom",
    });   
    toast.present();  
  }

  showToastOnPriceEmptyProducts() {
    const toast = this.toastController.create({
      message: "Products detail not available!",
      duration: 1000,
      position: "bottom",
    });
    toast.present();
  }

  showLoadingControllerLaunch() {
    let loading = this.loadingController.create({
      content: "Please wait !",
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 600);
  }

  showLoadingControllerListView() {
    let loading = this.loadingController.create({
      content: "Please wait displaying data in list!",
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 300);
  }

  showLoadingControllerGridView() {
    let loading = this.loadingController.create({
      content: "Please wait displaying data in grid!",
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 300);
  }

  showLoadingControllerFilter() {
    let loading = this.loadingController.create({
      content: "Please wait!",
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 300);
  }


  showToastOnAddProductLocal(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Local Cart : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
      duration: 3000,
      position: "bottom",
    });   
    toast.present();  
  }  
  

  showToastOnAddProductServer(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Server : \n ' + strProductAdded + '\n' + '\nProduct Quantity:  1',
      duration: 1000,
      position: "bottom",
    });   
    toast.present();   
  }   



  showToastOnAddProductWishlist(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Wishlist : \n ' + strProductAdded + '\n' ,
      duration: 1000,
      position: "bottom",
    });   
    toast.present();  
  }  

  showToastOnAddProduct(strProductAdded) {
    const toast = this.toastController.create({
      // message: this.testStr,
      message: 'Product Added in Cart : \n ' + strProductAdded + '\n' ,
      duration: 1000,
      position: "bottom",
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

async showToastOnWishlist()
{
 const toast = await this.toastController.create({
   message: 'Product already added in wishlist',
   duration: 3000,
   position: 'bottom',
 });
 toast.present();
} 

async showToastOnEmptyProduct()
{
 const toast = await this.toastController.create({
   message: 'Please select Product ',
   duration: 3000,
   position: 'bottom',
 });
 toast.present();
} 
    
callMakeApi() {


  this.httpClient.get('http://busybanda.com/sterling-tools/api/mmey_make_search').subscribe((response) => {
    const resultado = response;
    this.makeList = resultado; 
    this.modeKeys =resultado;
}); 
}      
     
async showMakeLoader() {
  const loading = await this.loadingController.create({
    content: 'Please wait fetching Make!',
    duration: 600,   
  });     
  await loading.present(); 
}

async showToastOnEmptyMake()
{
 const toast = await this.toastController.create({
   message: 'Please select Make ',
   duration: 3000,
   position: 'bottom',
 });
 toast.present();
} 

async showToastOnEmptyModel()
{
 const toast = await this.toastController.create({
   message: 'Please select Model ',
   duration: 3000,
   position: 'bottom',
 });
 toast.present();
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

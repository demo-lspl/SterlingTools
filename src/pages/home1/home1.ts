
import { DemoPage } from './../demo/demo';
import { ApiProvider } from './../../providers/api/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, ModalController, ToastController, IonicPage, LoadingController, Select, AlertController } from 'ionic-angular';

import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';
import { CartPage } from '../cart/cart';
import { WishlistPage } from '../wishlist/wishlist';
import { ItemdetailPage } from '../itemdetail/itemdetail';
import { HttpClient } from '@angular/common/http';
import { SearchproductsPage } from '../searchproducts/searchproducts';
import { FormControl } from '@angular/forms';
import { CategorydetailPage } from '../categorydetail/categorydetail';

/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page implements OnInit {

  @ViewChild('mySelect') selectRef: Select;

  stateInfo: string | any[] = [];
  countryInfo: any[] = [];
  cityInfo: string | any[] = [];
  makeInfo: string | any = [];
  modelInfo: string | any[] = [];
  makeValue: string;
  modelValue: string;
  engineValue: string;
  yearValue: string;

  strTestValue: string;
  strModelValue: string;
  strEngineValue: string;
  strEngineValueUpdated: string;

  strYearValue: string;

  strTestValue2: string;
  strTestValue3: string;


  makeList: any = [];
  modelList: any = [];
  engineList: any = [];
  yearList: any = [];
  productCategoryList: any = [];
  products: any = [];


  strMakeListValue: string;
  strMakeListSelectedValue: string;
  strModelListSelectedValue: string;
  strEngineListSelectedValue: string;
  obj;
  companyName: any;
  companyName1: any;

  newid: any;
  strDynamicId: string; 
  subject = '';
  body = '';
  to = '';
  searchText;
  showDataboolean = false;
  badge;
  strData: string;
  strProductCategoryName: string;
  strProductMake: string;
  productCategoryInformation: any = [];
  productCategoryInformation1: any = [];

  searchProduct = '';
  searchTerm: string = '';
  searchTerm1: string = '';
  searchControl: FormControl;
  searchControl1: FormControl;
  items: any;
  items1: any;

  searching: any = false;
  isItemAvailable = false;
  name: string;
  div1: boolean = true;
  div2: boolean = true;
  div3: boolean = true;
  showMainContent: Boolean = true;
  selectedType = 'make';
  sourceValue: any;
  showData: boolean = true;
  hide:boolean = true;
  hide1:boolean = true;
  hide2:boolean = true;
  hide3:boolean = true;


  hideMe;
  hideMe1;
  hideMe2;
  hideMe3;
  hideMeFirstValue:boolean = false;;

  hideButton:boolean = true;
  alive: boolean;

  
  constructor(public apiProvider: ApiProvider,
    public httpClient: HttpClient,
    public navCtrl: NavController,
    public toastController: ToastController,
    public apiService: ApiProvider,
    public loadingCtrl: LoadingController,
    public alertController: AlertController

  ) { 
    this.items = [
      { title: "one" },
      { title: "two" },
      { title: "three" },
      { title: "four" },
      { title: "five" }, 
      { title: "six" }
    ];

    this.searchControl = new FormControl();
    this.searchControl = new FormControl();

    this.initializeItems();
  
      
  }  

  ngOnInit() { 

    // this.callProductCategoryDetail();    

    this.getMakeApi();
    this.hide = !this.hide;
    this.hide1 = !this.hide1;
    this.hide2 = !this.hide2; 
    this.hide3 = !this.hide3;
  }


  approve(){
    if(this.hideButton){
        this.hideButton = false;
    }
      // this.alertController.c("Congrats! Your account has been approved")

      console.log('Congrats! Your account has been approved');
    }
  cancel(){
     if(this.hideButton){
         this.hideButton = false;
     }
    // this.message.alert("Sorry your account has not been approved")

     console.log('Sorry your account has not been approved');
   }

  clickfirst() {
    this.hideMeFirstValue = true;
  }
  

  getModelApi(strMakeListSelectedValue) {
    console.log('getModelApi called    ');
    const service = this.apiProvider.getMakeCategories(strMakeListSelectedValue);
    service.subscribe((data) => {
      const resultado = data;
      this.modelList = resultado;
      this.strMakeListSelectedValue = resultado;
      this.strModelListSelectedValue = resultado;
      this.strEngineListSelectedValue = resultado;
      this.obj = JSON.stringify(data);
      console.log('Selected model tushar:  ' + this.strTestValue);


     

    });
  }


  triggerMeMake(value: string): void {
    console.log("selected triggerMeMake", value);

    this.hideMe2 = !  this.hideMe2;
  }

  triggerMeModel(value: string): void {
    console.log("selected value", value);
    this.strModelValue = value;
    console.log("selected strTestValue1", this.strModelValue);
    this.getEngineApi(this.makeValue, this.strModelValue);
    this.hideMe1 = !  this.hideMe1;
    // this.companyName = 'Model value';
  }

  triggerMeEngine(value: string): void {
    console.log("selected value", value);
    this.strTestValue2 = value;
    console.log("selected strTestValue2", this.strTestValue2);
    this.getYearApi(this.makeValue, this.strModelValue, this.strTestValue2);
  }

  triggerMeYear(value: string): void {
    console.log("selected value", value);
    this.strTestValue3 = value;
    console.log("selected strTestValue3", this.strTestValue3);
    this.getYearApi(this.makeValue, this.strTestValue2, this.strTestValue3);
  }
  getEngineApi(strMakeListSelectedValue, strModelListSelectedValue) {
    console.log('getEngineApi called    ' + this.strModelValue);
    const service = this.apiProvider.getEngineCategories(strMakeListSelectedValue, this.strModelValue);
    service.subscribe((data) => {
      const resultado = data;
      this.engineList = resultado;
      this.strMakeListSelectedValue = resultado;
      this.strModelListSelectedValue = resultado;
      this.strModelListSelectedValue = this.modelValue;
      console.log('Engine api response  make ' + strMakeListSelectedValue);
      console.log('Engine api response  model ' + strModelListSelectedValue);

    });
  }

  getYearApi(strMakeListSelectedValue, strModelListSelectedValue, strEngineListSelectedValue) {
    console.log('getYearApi called    ');
    const service = this.apiProvider.getYearCategories(strMakeListSelectedValue, strModelListSelectedValue, strEngineListSelectedValue);
    service.subscribe((data) => {
      const resultado = data;
      this.yearList = resultado;
      this.strMakeListSelectedValue = resultado;
      this.strModelListSelectedValue = resultado;
      console.log('Engine api response   ' + resultado);
    });
  }  
  makeDropDownValue() {
    this.strMakeListSelectedValue = this.makeValue;
    this.getModelApi(this.strMakeListSelectedValue);
    console.log("Selected makeDropDownValue :  ", this.makeValue);
   this.hideMe = ! this.hideMe;

  }
  searchData(makeValue, strTestValue2, strEngineListSelectedValue, year) {

    if (!this.makeValue) {
      console.log('issue make');
      this.showToastOnEmptyMake();
    } 
    else if (!this.strModelValue) {
      this.showToastOnEmptyModel();
      console.log('issue model');
    }

    // else if (!this.strEngineValue) {
    //   this.strEngineValueUpdated = this.strEngineValue;
    //   this.showToastOnEmptyModel();
    //   console.log('issue engine' + this.strEngineValueUpdated);
    // }

    else {
      console.log('success!!!!!!');
      this.navCtrl.push(SearchproductsPage,
        {
          make: this.makeValue,
          model: this.strTestValue2,
          engine:this.strModelValue,
          year:this.yearValue
        });
 
      console.log("Sent product make " + this.makeValue);
      console.log("Sent product model " + this.strModelValue);
      console.log("Sent product engine " + this.strEngineListSelectedValue);
      console.log("Sent product year " + this.yearValue);
       
    }
  }

  async showToastOnEmptyMake() {
    const toast = await this.toastController.create({
      message: 'Please select Make ',
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  async showToastOnEmptyModel() {
    const toast = await this.toastController.create({
      message: 'Please select Model ',
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }


  callProductCategoryDetail() {
    this.httpClient.get('http://busybanda.com/sterling-tools/api/get_products/').subscribe((jsonResponse) => {
      if (jsonResponse) {
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();
        console.log('Got Json Response success');
        loading.dismiss();
        this.productCategoryInformation1 = jsonResponse['result'];
        this.obj = JSON.stringify(jsonResponse);
        console.log('Particular product details json ' + this.obj);

        localStorage.setItem('GetProducts', this.obj);
      }

      else {
        console.log('Got Json Response failure');
      }

      if (this.productCategoryInformation1 && this.productCategoryInformation1.length) {
        console.log('Particular product details available ');
      }
      else {
        this.strData = 'No data available';
        console.log('Particular product empty ' + jsonResponse['result']);
      }
    });
  }



  // productDetailPage(id, name,regular_price) {
  //   this.navCtrl.push(ItemdetailPage, {
  //     id: id,
  //     name: name,
  //     regular_price:regular_price
  //   });
  //   console.log("Sent product id " + id);
  //   console.log("Sent product name " + name); 
  //   console.log("Sent product name " + regular_price);
  //   console.log('data added '+this.val);
  // }



  searchClick(id, description, regular_price, image, pa_make, pa_model) {

    this.navCtrl.push(CategorydetailPage, {
      id: id,
      description: description,
      regular_price: regular_price,
      image: image,
      make: pa_make,
      model: pa_model
    });
    console.log("Selected Product Id " + id);
    console.log("Selected Product description " + description);
    console.log("Selected Product regular_price " + regular_price);
    console.log("Selected Product image " + image);
    console.log("Selected Product make " + pa_make);
    console.log("Selected Product model " + pa_model);






  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  filterItems1(searchTerm1) {
    return this.productCategoryInformation.filter(item1 => {
      return item1.name.toLowerCase().indexOf(searchTerm1.toLowerCase()) > -1;
    });
  }


  initializeItems() {


    this.items = [
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  getItems1(ev) {
    // Reset items back to all of the items
    // this.callProductCategoryDetail();

    console.log('Tushar' + this.name + this.productCategoryInformation1.length);

    // set val to the value of the ev target
    var val = ev.target.value;

    console.log('Tushar val' + val);


    // var ans = 334;
    // var temp = ans.toString().toLowerCase();
    // alert(temp);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.productCategoryInformation1 = this.productCategoryInformation1.filter((item) => {
        return (item.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
      })
    }
  }

  async showToastOnClick() {
    const toast = await this.toastController.create({
      message: 'Please select Model ',
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  div1Function() {
    this.div1 = true;
    this.div2 = false;
    this.div3 = false
  }

  div2Function() {
    this.div2 = true;
    this.div1 = false;
    this.div3 = false
  }

  div3Function() {
    this.div3 = true;
    this.div2 = false;
    this.div1 = false
  }

  openSelect() {
    this.selectRef.open();
  }

  closeSelect() {
    this.selectRef.close();
  }

  ShowHideButton() {
    this.showMainContent = this.showMainContent ? false : true;
  }
  onChange(event) {
    this.selectedType = event.target.value;
  }

  onChange1(event) {
    this.selectedType = 'Please select value';

  }

  onOptionsSelected(event) {
    let value = event.target.value;
    this.sourceValue = value;
    if (this.sourceValue === 'MAKE') {
      this.showData = true;
      console.log('Test');
    }
   



    else {
      this.showData = false;
      console.log('Test1');
    }
  }

  onOptionsSelected1(event) {
    let value = event.target.value;
    this.sourceValue = value;

    if (this.sourceValue === 'MAKE') {
      this.showData = true;
      console.log('Test2');
    }
 


    else {
      this.showData = false;
      console.log('Test3');
    }
  }  

  ngIfCtrl(){
    this.hide = !this.hide;
    console.log('Tushar called ');
  }  

  ngIfCtrl1(){
    this.hide = this.hide;
    console.log('Tushar called!!!!');
  }
  ngIfCtrl2(){ 
    this.hide = this.hide;
    console.log('Tushar called!!!!!!!!! ');
  }
    

  getOuterName(event){
    console.log("selected value getOuterName "+ this.companyName);
    console.log('Model clicked');
    // this.hideMe1 = !  this.hideMe1;
    // this.companyName = 'Default value' + '';
 }
 
 getOuterName1(event){
  console.log("selected value  getOuterName1"+ this.companyName1);
  console.log('Engine clicked');
  this.hideMe2 = !  this.hideMe2;

   
}
getOuterName2(event){
  console.log("selected value  getOuterName2"+ this.companyName);
  console.log('Year clicked');
  this.hideMe3 = !  this.hideMe2;
}
  

 hideTest() {
  console.log('Make clicked');
  this.hideMe = ! this.hideMe;
}

hideTest1() {
  console.log('Model clicked');
  this.hideMe1 = !  this.hideMe1;
}

hideTest2() {
  console.log('Engine clicked');
  this.hideMe2 = !  this.hideMe2;
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

}     
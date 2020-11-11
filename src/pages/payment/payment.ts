import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular'; 
import { PlacedPage } from '../placed/placed';
import { transform } from 'typescript';
import $ from "jquery";
@Component({
  selector: 'page-payment ',
  templateUrl: 'payment.html'
})
export class PaymentPage implements OnInit{
  emailAddress = '104402:BEo8VfAJvOT7Rf0h';
  password = '';
  obj;
  emailAddressencoded = 'testing';
  enstring = '104402:BEo8VfAJvOT7Rf0h';
  strUpdatedValue:string;
  strTest:number;
   retrievedObject:string;
  
  constructor(public navCtrl: NavController,
    public httpClient: HttpClient
   ) {
  }  
  ngOnInit(){
    this.loginCredentialsCheck1();
    // Retrieve the object from storage
    
  }
  loginCredentialsCheck1() {
//     let filePath: string = '104402:BEo8VfAJvOT7Rf0h';
// this.base64.encodeFile(filePath).then((base64File: string) => {
//   console.log('encoded pass '+base64File);
// }, (err) => {
//   console.log(err);  
// });
// Define the string
// Encode the String
var encodedString = btoa(this.enstring);
console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"
// // Decode the String
// var decodedString = atob(encodedString);
// console.log(decodedString); // Outputs: "Hello World!"
// var settings = {
//   "url": "https://demo.paymarkclick.co.nz/api/webpayments/paymentservice/rest/WPRequest",
//   "method": "POST",
//   "timeout": 0,
//   "mode": 'no-cors',
//   "dataType": "text",
//   "headers": {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   "data": {
//     "account_id": "625835",
//     "username": "104402",
//     "password": "BEo8VfAJvOT7Rf0h",
//     "cmd": "_xclick",
//     "amount": "1.00",
//     "return_url": "https://demo.paymarkclick.co.nz/guides/test"
//   }
// };
// $.ajax(settings).done(function (response) {
//   console.log("Ajax response"+response);
//   console.log("Ajax response  "+response.replace(/<\/?[^>]+>/gi, ""));
// });
//fetch method
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cookie", "ASP.NET_SessionId=cgydxj1s0320hgw0f5udwoh1; AWSELB=C99F59C51651FA01D4CDD5A64A04F21C64855D8A0792B4BF2570A997B2A9F532677F47FCCE580B41D0156EDE6538E87105E9B5B40ADB39EC1FFBEBBBAF86F902187CC34F8A; AWSELBCORS=C99F59C51651FA01D4CDD5A64A04F21C64855D8A0792B4BF2570A997B2A9F532677F47FCCE580B41D0156EDE6538E87105E9B5B40ADB39EC1FFBEBBBAF86F902187CC34F8A; TS01ea8473=01bec82efc8fe8f35bcdc2a3780ccc780d98d2ebd25ccdb4d1c13d630287e253bfa2a5e1b02a916c4a8fb482006e8406c92df561b5b915ab86c2e7ec2d288b4da518bf90c1965312dcc601882be8be4678b7855d7a6ab61d6d6b5783f73217a2851e84003f");
var urlencoded = new URLSearchParams();
urlencoded.append("account_id", "625835");
urlencoded.append("username", "104402");
urlencoded.append("password", "BEo8VfAJvOT7Rf0h");
urlencoded.append("cmd", "_xclick");
// localStorage.setItem("Total Amount", this.strSubTotalAmount);

this.retrievedObject = JSON.parse(localStorage.getItem('name'));

console.log('this.strTest ' + this.retrievedObject); 

urlencoded.append("amount",this.retrievedObject);

// urlencoded.append("amount", "1.00");
urlencoded.append("return_url", "https://demo.paymarkclick.co.nz/guides/test");
let requestParam: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded
};
var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://demo.paymarkclick.co.nz/api/webpayments/paymentservice/rest/WPRequest'
fetch(proxyUrl + targetUrl,requestParam)
.then(response => response.text())
.then(result => window.open(result.replace(/<\/?[^>]+>/gi, "")))
// .then(result => window.location.replace(result.replace(/<\/?[^>]+>/gi, "")))






//.catch(error => console.log('error', error));

// window.open("https://www.w3schools.com");

}
  placedPage() {
    // this.navCtrl.push(PlacedPage);
  }
}
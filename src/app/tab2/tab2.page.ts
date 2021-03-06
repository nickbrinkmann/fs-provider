import { Component } from '@angular/core';
import { Property } from '../models';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public property: any = {
    name: "",
    location: "",
    imgname: "",
    price: ""
  };

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log("Submitting to the server...");
    console.log(this.property);

    //Using Local Storage!! The local storage user id key is stored with login at login.page.ts
    this.property.ownerid = localStorage.getItem("user_id");
    
    this.httpClient
      .post("http://localhost:3000/api/properties/register", this.property)
      //Response is for success, err is for errors.
      .subscribe(
        (response: any) => {
          console.log(response);
          
          //If successful listing created, stores propertyId to pass as query parameter to other pages in app
          const propertyId = response.id;

          //Navigates to newly created property details page
          this.navCtrl.navigateForward('property-details',
            {
              queryParams: {
                propertyId: response.id
              }
            });
          //The above passes the propertyId as a query parameter
        },
        (err) => {
          console.log(err);
          this.presentAlert(err.error.message);
        }
      );
    //You should try to implement an alert if the request fails.
  }

  async presentAlert(error) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: error,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK Clicked');
          }
        }
      ]
    });
    return await alert.present();
  }
}
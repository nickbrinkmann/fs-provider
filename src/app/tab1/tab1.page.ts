import { Component, OnInit } from '@angular/core';
import { Property } from '../models';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public properties: Array<Property> = [];
  public userid = localStorage.getItem("user_id");

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {

    let arrow = async (data: any) => {
      // this.propertyId = data.params.propertyId;
      console.log(this.userid);

      //Sends an HTTP request to find properties owned by user

      this.httpClient
        .get("http://localhost:3000/api/properties/owner/" + this.userid)
        .subscribe(
          async (response: any) => {
            console.log(response);
            // console.log(response.id);

            //If successfully found properties, stores them to the properties array
            this.properties = response;
          },
          err => {
            console.log("Error");
            alert("Failed to find properties for this user");
          }
        );

      }

    this.activatedRoute.queryParamMap.subscribe(
      // When QueryParams are received, this sends the http request to the api.
      arrow
    );
  }

  navToProperty(property: Property) {
    this.navCtrl.navigateForward('property-details',
    {
      //This passes the propertyId as a query parameter
      queryParams: {
        propertyId: property.id 
      }
    });
  }

}

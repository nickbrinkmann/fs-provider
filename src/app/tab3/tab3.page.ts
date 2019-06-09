import { Component } from '@angular/core';
import { User } from '../models';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public currentuser: User;

  //Use this going forward
  public user: User = new User();

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private navCtrl: NavController
  ) {
    //Using Local Storage!! The local storage user id key is stored with login at login.page.ts
    const userId1 = localStorage.getItem("user_id");

    if (userId1) {
      this.httpClient
        .get("http://localhost:3000/api/users/" + userId1)
        .subscribe(
          //If you get problems with this code, change response type to any instead of User
          (response: User) => {
            console.log(response);

            //The user variable is defined above as a PUBLIC variable which we can use in this page.
            //We reference user in the html now.
            this.user.id = response.id;
            this.user.firstname = response.firstname;
            this.user.lastname = response.lastname;
            this.user.email = response.email;
          }
        );
    } else {
      //Navigate to login page
      this.navCtrl.navigateForward("login");
    }
  }

}

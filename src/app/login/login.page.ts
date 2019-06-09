import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = "";
  public password: string = "";

  constructor(
    private navCtrl: NavController,
    private httpClient: HttpClient,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  login() {
    const authReq = {
      email: this.email,
      password: this.password
    };

    this.httpClient
    .post("http://localhost:3000/api/users/login", authReq)
    .subscribe(
      (response: any) => {
        //If successful login, stores userId to pass as query parameter to other pages in app
        const userId = response.id;

        //Stores userid in local storage so that we can keep the user id everywhere once logged in. See its complement in
        //tab4.page.ts
        localStorage.setItem("user_id", userId);

        //Navigates to profile and passes in user id as query parameter
        this.navCtrl.navigateForward("tabs/tab3", {
          queryParams: {
            user_id: userId
          }
        });
      },
      err => {
        alert("Failed to login");
      }
      );
  }

  navToRegister() {
    this.navCtrl.navigateForward('register');
  }

}
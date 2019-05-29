import { Component } from '@angular/core';
import { Property } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public Listings: Array<Property> = [];

  constructor() {
    let listing1 = new Property();
    listing1.price="$50 per day";
    listing1.imgName="https://i.boring.host/16AXfItu.jpg";
    listing1.location="Zagreb, Croatia";
    listing1.address="5 Fake Address Road, Zagreb"

    let listing2 = new Property();
    listing2.price="$100 per day";
    listing2.imgName="https://i.boring.host/16AYUMML.jpg";
    listing2.location="Buenos Aires, Argentina";
    listing2.address="12 Not Real Drive, Buenos Aires";

    let listing3 = new Property();
    listing3.price="$30 per day";
    listing3.imgName="https://i.boring.host/16AZPdCE.jpg";
    listing3.location="Toronto, Canada";
    listing3.address="69 Dis A Dream Road, Toronto"

    this.Listings.push(listing1);
    this.Listings.push(listing2);
    this.Listings.push(listing3);
  }

}

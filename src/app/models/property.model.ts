export class Property {
    public price: string;
    public imgName: string;
    public location: string;
    public address: string;
    public occupancy: number;
    public listing_owner: string;

    constructor() {
        this.price="";
        this.imgName="";
        this.location="";
        this.address="";
        this.occupancy=undefined;
        this.listing_owner="";
    }
}
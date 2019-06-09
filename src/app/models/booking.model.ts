export class Booking {
    public id: number;
    public propertyid: number;
    public userid: number;
    public propownerid: number;
    public datefrom: string;
    public dateto: string;
    public status: string;

    constructor() {
        this.id = undefined;
        this.propertyid = undefined;
        this.userid = undefined;
        this.propownerid = undefined;
        this.datefrom = "";
        this.dateto = "";
        this.status = "";
    }
}
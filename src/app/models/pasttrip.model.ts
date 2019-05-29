import { Property } from './property.model';

export class Pasttrip extends Property {
    public startdate: string;
    public enddate: string;

    constructor() {
        super();
        this.startdate="";
        this.enddate="";
    }
}
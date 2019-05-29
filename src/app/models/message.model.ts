export class Message {
    public sender: string;
    public recipient: string;
    public subject: string;
    public content: string;

    constructor() {
        this.sender="";
        this.recipient="";
        this.subject="";
        this.content="";
    }
}
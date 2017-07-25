export class LoggerModel {

    sno:number;
    value:string;
    type:string;

    constructor(sno:number,value:string,type:string) {

        this.sno=sno;
        this.type=type;
        this.value=value;
    }
}
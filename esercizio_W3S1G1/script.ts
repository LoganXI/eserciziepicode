interface iSmartphone {
    credito:number
    numeroChiamate:number
}

interface iSmartphoneMethods{
    ricarica(agg:number):void

    chiamata(minu:number):void

    chiama404():number

    getNumeroChiamata():number

    azzeraChiamate():void
}

class User implements iSmartphone, iSmartphoneMethods{
    constructor(
        public credito: number,
        public numeroChiamate: number,
        public nome: string,
        public cognome: string
    ){

         this.credito=credito ,
         this.numeroChiamate=numeroChiamate ,
         this.nome= nome,
         this.cognome = cognome
    }
    public tariffa:number = 0.20;

    ricarica(agg: number): void {
        let cred:number = this.credito;
        cred = cred+agg;
        this.credito = cred
        // throw new Error("Method not implemented.")
    }
    chiamata(minu: number): void {
        if (this.credito>0){
            
            this.numeroChiamate=this.numeroChiamate+minu;
            let costo:number = minu*this.tariffa
            this.credito = this.credito-costo
        }else{

            console.log("no can do, baby doll: juice up your credit")
        }

    }
    chiama404(): number {
        return this.credito;
        // throw new Error("Method not implemented.")
    }
    getNumeroChiamata(): number {
        return this.numeroChiamate;
        // throw new Error("Method not implemented.")
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        throw new Error("Method not implemented.")
    }


}

const franco = new User(10,30,"Franco","Franchi");

franco.chiama404();
console.log(franco.chiama404())
console.log(franco.getNumeroChiamata())
franco.ricarica(10)
console.log(franco.chiama404())
franco.chiamata(20)
console.log(franco.chiama404())
franco.chiamata(120)
console.log(franco.chiama404())
franco.chiamata(120)




"use strict";
class User {
    constructor(credito, numeroChiamate, nome, cognome) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
        this.nome = nome;
        this.cognome = cognome;
        this.tariffa = 0.20;
        this.credito = credito,
            this.numeroChiamate = numeroChiamate,
            this.nome = nome,
            this.cognome = cognome;
    }
    ricarica(agg) {
        let cred = this.credito;
        cred = cred + agg;
        this.credito = cred;
        // throw new Error("Method not implemented.")
    }
    chiamata(minu) {
        if (this.credito > 0) {
            this.numeroChiamate = this.numeroChiamate + minu;
            let costo = minu * this.tariffa;
            this.credito = this.credito - costo;
        }
        else {
            console.log("no can do, baby doll: juice up your credit");
        }
    }
    chiama404() {
        return this.credito;
        // throw new Error("Method not implemented.")
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
        // throw new Error("Method not implemented.")
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        throw new Error("Method not implemented.");
    }
}
const franco = new User(10, 30, "Franco", "Franchi");
franco.chiama404();
console.log(franco.chiama404());
console.log(franco.getNumeroChiamata());
franco.ricarica(10);
console.log(franco.chiama404());
franco.chiamata(20);
console.log(franco.chiama404());
franco.chiamata(120);
console.log(franco.chiama404());
franco.chiamata(120);

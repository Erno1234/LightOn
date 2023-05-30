import Lampa from "./Lampa.js";
class JatekTer{
    #db;
    #allapotLista = [];
    #terulet;
    constructor(terulet){
        const szuloElem = $("#Jatekter");
        this.#terulet = terulet * terulet;
        for (let index = 0; index < this.#terulet; index++) {
            this.#allapotLista[index] = Math.round(Math.random() * 1);  
        }
        for (let index = 0; index < this.#allapotLista.length; index++) {
            const lampak = new Lampa(index, this.#allapotLista[index], szuloElem);      
        }
    }
}
export default JatekTer;
import Lampa from "./Lampa.js";
class JatekTer {
    #db;
    #allapotLista = [];
    #terulet;
    constructor(terulet) {
        const szuloElem = $("#Jatekter");
        this.#terulet = terulet * terulet;
        for (let index = 0; index < this.#terulet; index++) {
            if (Math.random() < 0.2) {
                this.#allapotLista[index] = 0;
            } else {
                this.#allapotLista[index] = 1;
            }
        }
        for (let index = 0; index < this.#allapotLista.length; index++) {
            const lampak = new Lampa(index, this.#allapotLista[index], szuloElem);
        }

        $(window).on("kapcsolas", (event) => {
            let aktElem = event.detail;
            aktElem.setAllapot();
        });
    }
}
export default JatekTer;
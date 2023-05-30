class Lampa {
  #allapot;
  #id;
  #divElem;
  constructor(id, allapot, szuloElem) {
    this.#id = id;
    this.#allapot = allapot;
    szuloElem.append(`
        <div class="Lampa">
            <p>${this.#allapot}</p>
        </div>
    `);
  }
  setAllapot() {}
  
  #szinBeallit() {}

  #kattintasTrigger() {
    const esemeny = new CustomEvent("kapcsolas", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
export default Lampa;

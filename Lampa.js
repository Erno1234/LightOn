class Lampa {
  #allapot;
  #id;
  #divElem;
  #pElem;
  constructor(id, allapot, szuloElem) {
    this.#id = id;
    this.#allapot = allapot;
    szuloElem.append(`
        <div class="Lampa">
            <p>${this.#allapot}</p>
        </div>
    `);
    this.#divElem = $(".Lampa:last-child");
    this.#pElem = $(".Lampa:last-child p");
    console.log(this.#pElem)
    this.#pElem.on("click", () => {
      this.#kattintasTrigger();
    });
    this.#szinBeallit(this.#allapot);
  }

  setAllapot() {
    if (this.#allapot == 1) {
      this.#allapot = 0;  
    }else{
      this.#allapot = 1;
    }
    this.#szinBeallit(this.#allapot);
  }

  #szinBeallit(allapot) {
    if (allapot == 0) {
      $(this.#divElem).css("background-color", "yellow");
      $(this.#pElem).css("color", "yellow");
    } else {
      $(this.#divElem).css("background-color", "green");
      $(this.#pElem).css("color", "green");
    }
  }
  getAllapot(){
    return this.#allapot;
  }


  #kattintasTrigger() {
    const esemeny = new CustomEvent("kapcsolas", { detail: this });
    window.dispatchEvent(esemeny);
  }
}
export default Lampa;

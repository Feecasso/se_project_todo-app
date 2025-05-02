class Popup {
  constructor([popupSelector]) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupcloseBtn = this._popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    console.log("Key pressed: ");
    if (evt.key === "Escape") {
      this.close();
    }
  }
  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }
  setEventListeners() {
    this._popupcloseBtn.addEventListener("click", () => {
      console.log(this);
      this.close();
    });
    this._popupElement.addEventListener("mousedown", (evt) => {
      console.log(evt.target.classList);

      if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
export default Popup;
// export default Popup;

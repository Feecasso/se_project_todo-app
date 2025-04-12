class FormValidator {
  constructor(settings, formEl) {
    this._formEl = formEl;
    this._inputSelector = settings._inputSelector;
    this._submitButton = this._formEl.querySelector(settings._submitButton);
    this._errorClass = settings._errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
  }

  resetValidation() {
    this._inputlist.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._formEl.reset();
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;

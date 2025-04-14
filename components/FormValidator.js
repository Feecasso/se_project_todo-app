class FormValidator {
  constructor(settings, formEl) {
    this._formEl = formEl;
    this._inputSelector = settings._inputSelector;
    this._submitButton = this._formEl.querySelector(settings._submitButton);
    this._errorClass = settings._errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
  }

  _showInputError(inputElement, errorMessage) {
    this._errorElementId = `#${inputElement.id}-error`;
    this._errorElement = this._formEl.querySelector(this._errorElementId);

    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    this._errorElementId = `#${inputElement.id}-error`;
    this._errorElement = this._formEl.querySelector(this._errorElementId);

    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    const buttonElement = this._formEl.querySelector(this._submitButton);
    if (!buttonElement) return; // Fix: Ensure buttonElement is not null

    if (this._hasInvalidInput()) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._formEl.reset();
    this._toggleButtonState();
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;

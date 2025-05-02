import Popup from "../components/Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    //bind the class to the function
  }
  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
    //store the values in an object and return it
  }

  setEventListeners() {
    super.setEventListeners();
    //add event listener to the form
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
      //call the function to handle the form submit
      //close the popup after the form is submitted
    });
  }
  restartForm() {
    this._popupForm.reset();
    //reset the form after the popup is closed
  }
}

export default PopupWithForm;
// export default PopupWithForm;

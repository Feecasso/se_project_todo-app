class toDo {
  constructor(data, selector) {
    this._data = data;
    this.templateElement = document.querySelector(selector);
  }
  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this.data.completed;
    this._todoCheckboxEl.id = `todo-${this.data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this.data.id}`);
  }
  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });
    this._todoCheckboxEl.addEventListener("click", () => {
      this._data.completed = this._data.completed;
    });
  }
  getView() {
    this._todoElement = this.templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    this._todoNameEl.textContent = this.data.name;

    this._generateCheckboxEl();
    this._setEventListeners();
    this._setDueDate();

    return this._todoElement;
  }
}

export default toDo;

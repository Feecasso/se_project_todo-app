class section {
  constructor({ items, renderer, containerSelector }) {
    this._item = Array.isArray(items) ? items : [];
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  rendererItem() {
    this._item.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._container.append(item);
  }
}

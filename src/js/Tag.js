export default class Tag {
  constructor({ className, elem }) {
    this.className = className;
    this._initElem(elem);
    this._initClassName();
  }

  static setAttributes(elem, options) {
    Object.entries(options).forEach(([attribute, value]) =>
      elem.setAttribute(attribute, value)
    );
  }

  static appendChildren(elem, children) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        elem.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        elem.appendChild(child);
      } else if (child instanceof Tag) {
        elem.appendChild(child.elem);
      }
    });
  }

  static addEventListeners(elem, options) {
    Object.entries(options).forEach(([event, listener]) => {
      elem.addEventListener(event, listener);
    });
  }

  static createElement(tagName, attributes = {}, textContent = '') {
    const elem = document.createElement(tagName);
    Tag.setAttributes(elem, attributes);
    elem.textContent = textContent;
    return elem;
  }

  static getLetterWidth(elem, text = 'a') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = getComputedStyle(elem).font;
    return context.measureText(text).width;
  }

  get dataset() {
    return this.elem.dataset;
  }

  get classList() {
    return this.elem.classList;
  }

  get scrollTop() {
    return this.elem.scrollTop;
  }

  set scrollTop(value) {
    this.elem.scrollTop = value;
  }

  _initElem(elem) {
    if (typeof elem === 'string') {
      this.elem = document.createElement(elem);
    } else if (elem instanceof HTMLElement) {
      this.elem = elem;
    } else {
      this.elem = document.createElement('div');
    }
  }

  _initClassName() {
    if (this.className) {
      this.elem.setAttribute('class', this.className);
    }
  }

  initAllChildrenStyle() {
    this.querySelectorAll('*').forEach((elem) => (elem.style = ''));
  }

  appendChild(child) {
    if (Array.isArray(child)) {
      child.forEach((elem) => this.appendChild(elem));
    } else if (child instanceof Tag) {
      this.elem.appendChild(child.elem);
    } else if (child instanceof Node) {
      this.elem.appendChild(child);
    }
  }

  insertBefore(newNode, refNode) {
    const ref = refNode instanceof Tag ? refNode.elem : refNode;
    if (newNode instanceof Tag) {
      this.elem.insertBefore(newNode.elem, ref);
    } else if (newNode instanceof Node) {
      this.elem.insertBefore(newNode, ref);
    }
  }

  removeChild(child) {
    if (Array.isArray(child)) {
      child.forEach((elem) => this.elem.removeChild(elem));
    } else if (child instanceof Tag) {
      this.elem.removeChild(child.elem);
    } else if (child instanceof Node) {
      this.elem.removeChild(child);
    }
  }

  removeAllChildren = () => {
    while (this.elem.lastElementChild) {
      this.elem.removeChild(this.elem.lastElementChild);
    }
  };

  addEventListener(type, listener) {
    this.elem.addEventListener(type, listener);
  }

  querySelector(selector) {
    return this.elem.querySelector(selector);
  }

  querySelectorAll(selector) {
    return [...this.elem.querySelectorAll(selector)];
  }
}

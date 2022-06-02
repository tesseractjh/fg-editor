import Tag from './Tag';

export default class PreviewTag extends Tag {
  constructor({ className, parent = null, text = null }) {
    super({ className });
    this.children = [];
    this.parent = parent;
    this.text = text;
  }

  removeChild(child) {
    super.removeChild(child);
    this.remove(child);
  }

  push(child) {
    this.children.push(child);
    child.parent = this;
  }

  remove(child) {
    let tag;
    if (typeof child === 'number') {
      tag = this.children[child];
    } else if (child instanceof Tag) {
      tag = child;
    }
    if (this.children.includes(child)) {
      this.children.splice(this.children.indexOf(child), 1);
    }
  }

  // 재귀적으로 모든 자손 요소 추가
  render() {
    this.removeAllChildren();
    this.children.forEach((child) => {
      child.render();
      this.elem.appendChild(child.elem);
    });
  }
}

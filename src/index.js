import './css/style.css';
import Editor from './js/Editor';

(function () {
  const findEditors = () => {
    return [...document.querySelectorAll('.fg-editor')];
  };
  findEditors().forEach((editor, index) => new Editor(editor, index).render());
})();

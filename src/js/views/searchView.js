import View from './view';

class SearchView extends View {
  _parentElemnt = document.querySelector('.search');

  _clearInput() {
    this._parentElemnt.querySelector('.search__field').value = '';
  }

  getQuery() {
    const query = this._parentElemnt.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElemnt.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();

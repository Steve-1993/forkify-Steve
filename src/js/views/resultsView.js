import View from './view';
import previewView from './previewView';

class ResultsView extends View {
  _parentElemnt = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query~ Please try again';
  _message;

  _generateMarkup() {
    return this._data.length === 0 ? '' : previewView.render(this._data, false);
  }
}

export default new ResultsView();

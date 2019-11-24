import '../style/style.css';
import {
  TRANSPORT_LIST_STORAGE_KEY,
  COST_LIST_STORAGE_KEY
} from './constants/common.constants.js';
import Render from './render.js';
import LocalStorage from './services/localstorage';

function init() {
  const localStorage = new LocalStorage();
  const renderApp = new Render(localStorage);

  localStorage.setKeys([
    TRANSPORT_LIST_STORAGE_KEY,
    COST_LIST_STORAGE_KEY
  ]);
  renderApp.createForms();
  renderApp.renderItems();
}

init();
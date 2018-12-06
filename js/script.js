
import insertElement from './modules/insertElement.js';
import data from './modules/booksData.js';
import bookCardTemplate from './modules/booksCardTemplate.js'

if (document.querySelector(bookCardTemplate.wrap)) {
  insertElement(data.items, bookCardTemplate);
}



import createElement from './createElement.js';

function insertElement(array, template) {
  const wrap = document.querySelector(template.wrap);

  array.forEach( item => {
    const book = createElement(item, template);
    wrap.appendChild(book);
  });


};

export default insertElement;

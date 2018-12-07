import insertElement from './modules/insertElement.js';
import data from './modules/booksData.js';
import bookCardTemplate from './modules/booksCardTemplate.js'

    // if (document.querySelector(bookCardTemplate.wrap)) {
    //   insertElement(data.items, bookCardTemplate);
    // }

const url = {
  page: 1,
  perPage: 8,
  type: ''
};

const tabsWrap = document.querySelector('.j-tabs');
const tabsArray = Array.from(tabsWrap.children);

tabsArray.forEach(function(tab) {
  const link = tab.firstElementChild;

  link.addEventListener('click', function(event) {
    event.preventDefault();
    url.type = event.target.dataset.type;

    if (window.matchMedia("(min-width: 768px)").matches) {
      url.perPage = 8;
    } else {
      url.perPage = 3;
    }

    const dataAjax = `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${url.page}/${url.perPage}/${url.type}`;

    sendRequest(dataAjax);

  });

function sendRequest(data) {
  let xhr = new XMLHttpRequest;

  xhr.open('GET', data);

  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      const request =JSON.parse(xhr.responseText);
      console.log(request);

      const wrap = document.querySelector(bookCardTemplate.wrap);

      if( wrap.children ) {
        wrap.innerHTML = '';
      }

      if (document.querySelector(bookCardTemplate.wrap)) {
        insertElement(request.items, bookCardTemplate);
      }


    } else {
      console.log(`жду`+ xhr.readyState);
    }
  };
}

  // const type = link.dataset.type;

//console.log(dataAjax);



});

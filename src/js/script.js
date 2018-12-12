import insertElement from './modules/insertElement.js';
import bookCardTemplate from './modules/booksCardTemplate.js';
import sendRequest from './modules/sendRequest.js'

    // if (document.querySelector(bookCardTemplate.wrap)) {
    //   insertElement(data.items, bookCardTemplate);
    // }


//объект данных для запроса
const url = {
  page: 1,
  perPage: 8,
  type: ''
};

const wrap = document.querySelector(bookCardTemplate.wrap);
if (wrap) {

  const dataAjax = createDataAjax();
  sendRequest(dataAjax, function(responseObj){
    if (wrap.children) {
      wrap.innerHTML = '';
    }
   insertElement(responseObj.items, bookCardTemplate);

  });

};


// вешаем слушатель на табы
const tabsWrap = document.querySelector('.j-tabs');
const tabsArray = Array.from(tabsWrap.children);

tabsArray.forEach(function(tab) {
  const link = tab.firstElementChild;

  link.addEventListener('click', function(event) {
    event.preventDefault();
    url.type = event.target.dataset.type;

    const dataAjax = createDataAjax();
    sendRequest(dataAjax, function(responseObj){

    if (wrap.children) {
      wrap.innerHTML = '';}

   insertElement(responseObj.items, bookCardTemplate);

  });

  });
});

//функция подготовык урла для гет запроса
function createDataAjax () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    url.perPage = 8;
  } else {
    url.perPage = 3;
  }

  return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${url.page}/${url.perPage}/${url.type}`;
};


// function sendRequest(data) {
//   let xhr = new XMLHttpRequest;

//   xhr.open('GET', data);

//   xhr.send();

//   xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//       const request =JSON.parse(xhr.responseText);
//       console.log(request);

//       const wrap = document.querySelector(bookCardTemplate.wrap);

//       if( wrap.children ) {
//         wrap.innerHTML = '';
//       }

//       if (document.querySelector(bookCardTemplate.wrap)) {
//         insertElement(request.items, bookCardTemplate);
//       }


//     } else {
//       console.log(`жду`+ xhr.readyState);
//     }
//   };
// };

const bookCardTemplate = {
  wrap: '.j-cards',
  tag: 'div',
  tagClass: 'products-card-mini',
  setContent: function(data) {
    return `<h2 class="products-card-mini__title">
            <a href="${data.url}">${data.name}</a>
          </h2>
          <a href="${data.url}" class="products-card-mini__img-wrap">
            <img src="#" class="products-card-mini__img">
          </a>
          <p class="products-card-mini__descr">${data.desc} </p>
          <div class="products-card-mini__price">${data.price} &#8381</div>`;
  }
}

export default bookCardTemplate;


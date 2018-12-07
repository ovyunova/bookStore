const bookCardTemplate = {
  wrap: '.j-cards',
  tag: 'article',
  tagClass: 'products-card-mini',
  setContent: function(data) {
    return `<h2 class="product-card-mini__title">
            <a href="${data.url}">${data.name}</a>
          </h2>
          <a href="${data.url}" class="product-card-mini__img-wrap">
            <img src="#" class="products-card-mini__img">
          </a>
          <p class="product-card-mini__descr">${data.desc} </p>
          <div class="product-card-mini__price">${data.price} &#8381</div>`;
  }
}

export default bookCardTemplate;


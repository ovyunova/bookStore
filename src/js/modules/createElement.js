function createElement (book, template) {
  const article = document.createElement(template.tag);
  article.classList.add(template.tagClass);
  article.innerHTML = template.setContent(book);

  return article;
};

export default createElement;

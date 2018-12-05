function createElement (book, template) {
    const div = document.createElement(template.tag);
    div.classList.add(template.tagClass);

    div.innerHTML = template.setContent(book);
    // let elem = ``;

    return div;
};

export default createElement;

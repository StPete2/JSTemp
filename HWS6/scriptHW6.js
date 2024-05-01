const dataJs = JSON.parse(dataFeaturedProducts);
console.log(dataJs);

const productsSection = document.querySelector('section.products');
const productsItems = productsSection.querySelector('div.products__items');

dataJs.forEach(element => {
    const templateEl = document.querySelector('#product-template');
    const cloneEl = templateEl.content.cloneNode(true);

    cloneEl.querySelector('figure.products__item_img img').src = element.imgSrc;

    cloneEl.querySelector('h5.products__item_title').innerHTML = element.productName;

    cloneEl.querySelector('p.products__item_description').innerHTML = element.productDescription;

    cloneEl.querySelector('p.products__item_price').innerHTML = element.productPrice;

    productsItems.appendChild(cloneEl);
});
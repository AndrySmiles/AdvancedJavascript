'use strict';

const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}/products`;
const featuredItemsEl = document.querySelector('.featuredItems');

if (window.location.href.indexOf("product") > 0) {
    products.length = 3;
} else if (window.location.href.indexOf("catalog") > 0) {
    products.length = 9;
} else {
    products.length = 6;
}

const getProductMarkup = (product) => {
    return `   
    <div class="card card__box__link" onclick="location.href='product.html';">
    <div class="box__card__img">
        <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
        <div class="card__product__buttons">
            <button class="card__button" data-productId="${product.id}">                
                Add to Cart
            </button>
        </div>
    </div>
    <h4 class="heading__mini">${product.name}</h4>
    <p class="card__text">${product.description}</p>
    <p class="card__price">$${product.price}</p>
    </div>    
    `;
};

const insertProductsIntoPage = (list = products) => {
    let productsMarkup = list.map(
        item => getProductMarkup(item)
    ).join('');

    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

insertProductsIntoPage(products);

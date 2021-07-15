'use strict';

const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}/products`;
const pathToCartImages = `${pathToImages}/cart`;

class ProductDTO {
    constructor(id, image, name, description, price) {
        this._id = id;
        this._image = image;
        this._name = name;
        this._description = description;
        this._price = price;
    }

    getPrice() {
        return this._price;
    }

    render() {
        return `   
        <div class="card card__box__link" onclick="location.href='product.html';">
        <div class="box__card__img">
            <img src="${pathToProductsImages}/${this._image}" alt="${this._name}">
            <div class="card__product__buttons">
                <button class="card__button" data-productId="${this._id}">                
                    Add to Cart
                </button>
            </div>
        </div>
        <h4 class="heading__mini">${this._name}</h4>
        <p class="card__text">${this._description}</p>
        <p class="card__price">$${this._price}</p>
        </div>    
        `;
    }
}

class ProductCartDTO {
    constructor(id, image, name, description, price, color, size, quantity = 1) {
        this._id = id;
        this._image = image;
        this._name = name;
        this._description = description;
        this._price = price;
        this._color = color;
        this._size = size;
        this._quantity = quantity;
    }

    getPrice() {
        return this._price * this.quantity;
    }

    render() {
        return `

        <div class="cart__product">

        <div class="cart__img">
            <img class="cart__img__size" src="${pathToCartImages}/${this._image}" alt="${this._name}">
        </div>

        <div class="cart__item__info">
            <div class="cart__item__title">
            ${this._name}
            </div>

            <div class="cart__item__price">
                Price: <span class="cart__item__price__color">
                    $${this._price}
                </span>

            </div>

            <div class="cart__item__color">
                Color: ${this._color}
            </div>

            <div class="cart__item__size">
                Size: ${this._size}
            </div>

            <div class="cart__quantity">
                <div class="cart__item__quantity">
                    Quantity:
                </div>
                <div class="cart__item__number">
                    <input class="filter__quantity" type="text" placeholder="2" required>
                </div>

            </div>

        </div>

        <div class="cart__item__close">
            <svg class="cart__item__delete" width="10" height="12" viewBox="0 0 10 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.21133 5.73193L9.66221 1.87065C9.82599 1.68772 9.91811 1.43948 9.91832 1.18055C9.91852 0.921615 9.82679 0.673196 9.6633 0.489941C9.49981 0.306686 9.27796 0.203606 9.04655 0.203377C8.81513 0.203148 8.59312 0.30579 8.42934 0.488722L4.97846 4.35L1.52758 0.488722C1.3638 0.305467 1.14167 0.202515 0.910056 0.202515C0.678439 0.202515 0.456309 0.305467 0.292531 0.488722C0.128753 0.671977 0.0367432 0.920525 0.0367432 1.17969C0.0367432 1.43885 0.128753 1.6874 0.292531 1.87065L3.74341 5.73193L0.292531 9.5932C0.128753 9.77646 0.0367432 10.025 0.0367432 10.2842C0.0367432 10.5433 0.128753 10.7919 0.292531 10.9751C0.456309 11.1584 0.678439 11.2613 0.910056 11.2613C1.14167 11.2613 1.3638 11.1584 1.52758 10.9751L4.97846 7.11386L8.42934 10.9751C8.59312 11.1584 8.81525 11.2613 9.04687 11.2613C9.27848 11.2613 9.50061 11.1584 9.66439 10.9751C9.82817 10.7919 9.92018 10.5433 9.92018 10.2842C9.92018 10.025 9.82817 9.77646 9.66439 9.5932L6.21133 5.73193Z" />
            </svg>


        </div>

    </div>
        `;
    }
}


class InsertProductsIntoPage {
    constructor(goods, container) {
        this._goods = goods;
        this._$insertContainer = container;
    }

    renderProductsIntoPage() {
        let productsIntoPage = this._goods.map(
            item => item.render()
        ).join(' ');

        this._$insertContainer.insertAdjacentHTML('afterbegin', productsIntoPage);
    }
}

const products = new InsertProductsIntoPage([
    new ProductDTO(
        0,
        'card_1.png',
        'Product 1',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        52.22,
    ),
    new ProductDTO(
        1,
        'card_2.png',
        'Product 2',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
        32.12,
    ),
    new ProductDTO(
        2,
        'card_3.png',
        'Product 3',
        'Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
        82.87,
    ),
    new ProductDTO(
        3,
        'card_4.png',
        'Product 4',
        'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        22.39,
    ),
    new ProductDTO(
        4,
        'card_5.png',
        'Product 5',
        'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
        92.99,
    ),
    new ProductDTO(
        5,
        'card_6.png',
        'Product 6',
        'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
        12.55,
    ),
    new ProductDTO(
        6,
        'card_7.png',
        'Product 7',
        'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.',
        22.39,
    ),
    new ProductDTO(
        7,
        'card_8.png',
        'Product 8',
        'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
        92.99,
    ),
    new ProductDTO(
        8,
        'card_9.png',
        'Product 9',
        'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
        12.55,
    ),
], document.querySelector('.featuredItems'));

const cart = new InsertProductsIntoPage([
    new ProductCartDTO(
        0,
        'cart_1.png',
        'Product 1',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        52.22,
        'Red',
        'XL',
    ),
    new ProductCartDTO(
        1,
        'cart_2.png',
        'Product 2',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        32.12,
        'Blue',
        'XL',
    ),
], document.querySelector('.featuredItemsCart'));

products.renderProductsIntoPage();
cart.renderProductsIntoPage();




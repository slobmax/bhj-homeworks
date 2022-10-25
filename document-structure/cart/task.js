const minus = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
minus.forEach(el => el.addEventListener('click', () => {    
    if(el.nextElementSibling.innerText > 1) {
        el.nextElementSibling.innerText--;
    }    
}));

const plus = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
plus.forEach(el => el.addEventListener('click', () => {
    el.previousElementSibling.innerText++;
}))

const addInTrash = Array.from(document.querySelectorAll('.product__add'));

addInTrash.forEach(el => el.addEventListener('click', () => {
    const cartId = el.closest('.product').getAttribute('data-id');
    const cartImage = el.closest('.product__controls').previousElementSibling.src;
    let cartCount = el.closest('.product__quantity').querySelector('.product__quantity-value').innerText;
    const cart = `<div class="cart__product" data-id=${cartId}>
                        <img class="cart__product-image" src=${cartImage}>
                        <div class="cart__product-count">${cartCount}</div>
                    </div>`;

    const trash = document.querySelector('.cart__products');
    
    const cartInTrash = Array.from(document.querySelectorAll('.cart__product'));
        
    let searchId;
    
    cartInTrash.forEach(elem => {    
        elem.getAttribute('data-id') === cartId ? searchId = true && 
        (elem.querySelector('.cart__product-count').innerText = 
        Number(elem.querySelector('.cart__product-count').innerText) + Number(cartCount)) : 
        searchId = false;
    });

    if(!searchId) {
        trash.insertAdjacentHTML('beforeEnd', cart) 
    }    
}))
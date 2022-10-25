const remove = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
remove.forEach(el => el.addEventListener('click', () => {    
    if(el.nextElementSibling.textContent > 1) {
        el.nextElementSibling.textContent--;
    }    
}));

const add = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
add.forEach(el => el.addEventListener('click', () => {
    el.previousElementSibling.textContent++;
}))


const addInTrash = Array.from(document.querySelectorAll('.product__add'));


addInTrash.forEach(el => el.addEventListener('click', () => {
    const dataId = el.closest('.product').getAttribute('data-id');
    const prodImage = el.closest('.product__controls').previousElementSibling.src;
    let prodCount = el.closest('.product__quantity').querySelector('.product__quantity-value').innerText;
    const product = `<div class="cart__product" data-id=${dataId}>
                        <img class="cart__product-image" src=${prodImage}>
                        <div class="cart__product-count">${prodCount}</div>
                    </div>`;

    const trash = document.querySelector('.cart__products');
    
    const prodInTrash = Array.from(document.querySelectorAll('.cart__product'));
    trash.insertAdjacentHTML('beforeEnd', product); 
    console.log(prodInTrash);
    //prodInTrash.forEach(elem => {elem.innerText === dataId ?
    //elem.querySelector('.cart__product-count').innerText++ :
    //trash.insertAdjacentHTML('beforeEnd', product);
    
    
    //trash.insertAdjacentHTML('beforeEnd', product);   
    //});
    
    //prodInTrash.includes(!dataId) ? trash.insertAdjacentHTML('beforeEnd', product) : prodCount++;
    
    //trash.insertAdjacentHTML('beforeEnd', product);  
    
}))


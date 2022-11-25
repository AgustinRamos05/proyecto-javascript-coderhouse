//Declarando la clase product
class Product{
    constructor(id, name, price, stock, img){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.img = img;
    }
    TransformToPesos(){
          this.price = this.price * 290
    }
    Sold(){
        this.stock = this.stock - 1
    }
}

//Declarando los productos

const products = [];
products.push(new Product(001, "Iphone 8",240,3,"./img/3770003825319-photosite-20210217-173118-0.webp"));
products.push(new Product(002, "Iphone 8 Plus",300,4,"./img/iphone-8plus-zwart-multi_600x600_BGresize_16777215-tj.png"));
products.push(new Product(003, "Iphone XS",350,2,"./img/iphone-xsmax-zilver-multiapple_600x600_BGresize_16777215-tj.png"));
products.push(new Product(004, "Iphone 11",425,6, "./img/593ebd1f-15f4-4b60-a3ce-89d3c1161ccd.jpg"));
products.push(new Product(005, "Iphone 12",560,6,"./img/apple-iphone-12--64gb-mjnm3gha-purple----mjnm3gha.jpg"));
// products.push(new Product(006, "Iphone 13",620,5));


let shopContent = document.getElementById("shopContent")

let shoppingCart = []

products.forEach((product)=>{

    let createProduct = document.createElement("div")
    createProduct.className = "products"
    createProduct.innerHTML =`
    <img src="${product.img}" class="products__img" alt="${product.name}">
    <h5 class="products__title">${product.name}</h5>
    <p class="products__price">${product.price} usd</p>
    `;

    shopContent.append(createProduct)

    let buy = document.createElement("button")
    buy.innerText = "comprar"
    buy.className = "btn"

    createProduct.append(buy)

    buy.addEventListener("click", ()=>{

        shoppingCart.push(product)
        console.log(shoppingCart);
        localStorage.setItem("shoppingCartProducts", JSON.stringify(shoppingCart));

    })

    
    
})

let seeShopingCart = document.getElementById("shoppingCart")

seeShopingCart.addEventListener("click", ()=>{

    const modalHeader = document.createElement("div")
    modalHeader.className = "shoppingCartProducts"
    modalHeader.innerHTML = `
    <h3>Carrito</h3>
    `;

    seeShopingCart.append(modalHeader);

    shoppingCart.forEach((product)=>{
        let shoppingCartContent = document.createElement("div")
        shoppingCartContent.className = "buyProduct"
        shoppingCartContent.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h5>${product.name}</h5>
        <p>${product.price} usd</p>
        `
        modalHeader.append(shoppingCartContent);

        let deleteProduct = document.createElement("button")
        deleteProduct.innerText = "Eliminar"

        deleteProduct.addEventListener("click", ()=>{
            shoppingCart.shift(product)
        })

        shoppingCartContent.append(deleteProduct);


    })
})

let shoppingCartProducts = JSON.stringify(localStorage.getItem("shoppingCart"));

function renderShoppingCart(shoppingCartProducts, shoppingCart){

if(shoppingCartProducts){
    shoppingCartProducts = shoppingCart
}
}

renderShoppingCart(shoppingCart)





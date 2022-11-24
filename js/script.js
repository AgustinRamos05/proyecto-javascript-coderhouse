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

        shoppingCart.push(
            {
                id: product.id,
                name: product.name,
                price: product.price
            }
        )
        console.log(shoppingCart);
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
            shoppingCart.shift({
                id: product.id,
                name: product.name,
                price: product.price
            })
        })

        shoppingCartContent.append(deleteProduct);


    })
})





//Variables para el funcionamiento del ciclo

// let catalogue = 0
// let add = 0
// let selectProduct = 0
// let carrito = []
// let pay = 0
// let repeat = 0

//Funcion para ver catalogo y agregar productos al carrito

// function verCatalogo(){

//     catalogue = Number(prompt("¿Desea ver nuestro catalogo? (1- Si 2- No)"));
//     switch(catalogue){
//         case 1:
//             while(repeat !== 2){
//                 console.log("El usuaruio desea ver el catalogo");
//                 products.forEach((obj) =>{
//                     console.log(obj);
//                     alert(obj.name + "    Costo: "+ obj.price + " usd");
//                 })
//                 add = Number(prompt("¿Desea agregar algunos de estos productos al carrito? (1- Si 2- No)"));
//                 switch(add){
//                     case 1:
//                         selectProduct = Number(prompt("Seleccione el numero del que desea añadir: 0-Iphone 8  1-Iphone 8 Plus  2-Iphone XS  3-Iphone 11  4-Iphone 12 5-Iphone 13"));
//                         if ((selectProduct >= 0) && (selectProduct <= 5)){
//                             carrito.push(products[selectProduct]);
//                             console.log(products[selectProduct].name + " se ha añadido al carrito");
//                             pay = pay + products[selectProduct].price
//                             console.log("Total: " + pay);
//                             alert(products[selectProduct].name + " se ha añadido al carrito correctamente");
//                             repeat = Number(prompt("¿Desea ver otro producto? (1- Si 2- No)"));
//                         }else{
//                             console.log("El numero ingresado por el usuario no corresponde a ningun producto");
//                             alert("El numero ingresado es incorrecto")
//                         }
//                         break
//                     case 2:
//                         console.log("El usuario no desea realizar una compra");
//                         alert("Gracias por visitar nuestro sitio web");
//                         repeat = 2
//                         break
//                     default:
//                         console.log("Se ingreso un valor incorrecto");
//                         alert("Se ingreso un valor incorrecto");
//                         break
//                 }
//             }
//             break
//         case 2:
//             console.log("El usuario no desea ver el catalogo");
//             alert("Gracias por visitar nuestro sitio web");
//     }
// }

// verCatalogo();

//Funcion para realizar la compra

// function verCarrito(){

//     if (pay > 0){
//         let buy = Number(prompt("¡Desea efectuar la compra? (1- Si 2- No)"))
//         switch(buy){
//             case 1:
//                 let priceInPesos = pay * 290
//                 alert("Su saldo a pagar es de $" + priceInPesos + " o " + pay + "usd" );
//                 console.log("Saldo a pagar: $" + priceInPesos);
//             break
//             case 2:
//                 alert("Gracias por visitar nuetra pagina");
//                 break
//             default:
//                 console.log("Se ingreso un valor incorrecto");
//                 alert("Se ingreso un valor incorrecto");
//                 break
//         }
//     }else{
//         console.log("No hay productos en el carrito");
//     }
// }

// verCarrito();




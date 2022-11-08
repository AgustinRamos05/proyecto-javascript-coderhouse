//Declarando la clase product
class Product{
    constructor(id, name, price, stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
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
products.push(new Product(001, "Iphone 8",240,3));
products.push(new Product(002, "Iphone 8 Plus",300,4));
products.push(new Product(003, "Iphone XS",350,2));
products.push(new Product(004, "Iphone 11",425,6));
products.push(new Product(005, "Iphone 12",560,6));
products.push(new Product(006, "Iphone 13",620,5));

//Variables para el funcionamiento del ciclo

let catalogue = 0
let add = 0
let selectProduct = 0
let carrito = []
let pay = 0
let repeat = 0

//Funcion para ver catalogo y agregar productos al carrito

function verCatalogo(){

    catalogue = Number(prompt("¿Desea ver nuestro catalogo? (1- Si 2- No)"));
    switch(catalogue){
        case 1:
            while(repeat !== 2){
                console.log("El usuaruio desea ver el catalogo");
                products.forEach((obj) =>{
                    console.log(obj);
                    alert(obj.name + "    Costo: "+ obj.price + " usd");
                })
                add = Number(prompt("¿Desea agregar algunos de estos productos al carrito? (1- Si 2- No)"));
                switch(add){
                    case 1:
                        selectProduct = Number(prompt("Seleccione el numero del que desea añadir: 0-Iphone 8  1-Iphone 8 Plus  2-Iphone XS  3-Iphone 11  4-Iphone 12 5-Iphone 13"));
                        if ((selectProduct >= 0) && (selectProduct <= 5)){
                            carrito.push(products[selectProduct]);
                            console.log(products[selectProduct].name + " se ha añadido al carrito");
                            pay = pay + products[selectProduct].price
                            console.log("Total: " + pay);
                            alert(products[selectProduct].name + " se ha añadido al carrito correctamente");
                            repeat = Number(prompt("¿Desea ver otro producto? (1- Si 2- No)"));
                        }else{
                            console.log("El numero ingresado por el usuario no corresponde a ningun producto");
                            alert("El numero ingresado es incorrecto")
                        }
                        break
                    case 2:
                        console.log("El usuario no desea realizar una compra");
                        alert("Gracias por visitar nuestro sitio web");
                        repeat = 2
                        break
                    default:
                        console.log("Se ingreso un valor incorrecto");
                        alert("Se ingreso un valor incorrecto");
                        break
                }
            }
            break
        case 2:
            console.log("El usuario no desea ver el catalogo");
            alert("Gracias por visitar nuestro sitio web");
    }
}

verCatalogo();

//Funcion para realizar la compra

function verCarrito(){

    if (pay > 0){
        let buy = Number(prompt("¡Desea efectuar la compra? (1- Si 2- No)"))
        switch(buy){
            case 1:
                let priceInPesos = pay * 290
                alert("Su saldo a pagar es de $" + priceInPesos + " o " + pay + "usd" );
                console.log("Saldo a pagar: $" + priceInPesos);
            break
            case 2:
                alert("Gracias por visitar nuetra pagina");
                break
            default:
                console.log("Se ingreso un valor incorrecto");
                alert("Se ingreso un valor incorrecto");
                break
        }
    }else{
        console.log("No hay productos en el carrito");
    }
}

verCarrito();




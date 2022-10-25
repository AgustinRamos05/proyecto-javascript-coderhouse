//Precio de los productos

const iphone8 = 240
const iphone8Plus = 300
const iphoneXS = 350
const iphone11 = 425
const iphone12 = 560

//Stock 

let stockIphone8 = 2
let stockIphone8Plus = 3
let stockIphoneXS = 3
let stockIphone11 = 5
let stockIphone12 = 4

//Variables para el funcionamiento del ciclo

let catalogue = 0
let product = 0
let carrito = 0
let pago = 0
let repeat = 0

//Funcion para ver catalogo y agregar productos al carrito

function verCatalogo(){

    catalogue = Number(prompt("¿Desea ver nuestro catalogo? (1- Si 2- No)"))
    switch(catalogue){
    case 1:
        while(repeat !== 2){
        console.log("El usuario desea ver el catalogo");
        product = Number(prompt("¿Que producto desea ver? 1-Iphone 8  2-Iphone 8 Plus  3-Iphone XS  4-Iphone 11  5-Iphone 12"))
        switch(product){
            case 1:
                console.log("Iphone 8");
                carrito = Number(prompt("¿Desea agregarlo al carrito? Precio: 240 usd (1- Si 2- No)"))
                if(carrito == 1){
                    pago = pago + iphone8
                    console.log("Se ha agregado el producto al carrito. Precio: " + iphone8 + " usd");
                    console.log( "Total del carrito: " + pago + " usd" )
                    alert("se ha agregado al carrito");
                    repeat = Number(prompt("¿Desea seguir viendo productos? (1- Si 2- No)"))
                }else{
                   console.log("No se ha agregado al carrito");
                   repeat = Number(prompt("¿Desea ver otro producto? (1- Si 2- No)"))
                }
                break
            case 2:
                console.log("Iphone 8 Plus");
                carrito = Number(prompt("¿Desea agregarlo al carrito? Precio: 300 usd (1- Si 2- No)"))
                if(carrito == 1){
                    pago = pago + iphone8Plus
                    console.log("Se ha agregado el producto al carrito. Precio: " + iphone8Plus + " usd");
                    console.log( "Total del carrito: " + pago + " usd" )
                    alert("se ha agregado al carrito");
                    repeat = Number(prompt("¿Desea seguir viendo productos? (1- Si 2- No)"))
                }else{
                    console.log("No se ha agregado al carrito");
                   repeat = Number(prompt("¿Desea ver otro producto? (1- Si 2- No)"))
                }
                break
            case 3:
                console.log("Iphone XS");
                carrito = Number(prompt("¿Desea agregarlo al carrito? Precio: 350 usd (1- Si 2- No)"))
                if(carrito == 1){
                    pago = pago + iphoneXS
                    console.log("Se ha agregado el producto al carrito. Precio: " + iphoneXS + " usd");
                    console.log( "Total del carrito: " + pago + " usd" )
                    alert("se ha agregado al carrito");
                    repeat = Number(prompt("¿Desea seguir viendo productos? (1- Si 2- No)"))
                }else{
                    console.log("No se ha agregado al carrito");
                   repeat = Number(prompt("¿Desea ver otro producto? (1- Si 2- No)"))
                }
                break
            case 4:
                console.log("Iphone 11");
                carrito = Number(prompt("¿Desea agregarlo al carrito? Precio: 425 usd (1- Si 2- No)"))
                if(carrito == 1){
                    pago = pago + iphone11
                    console.log("Se ha agregado el producto al carrito. Precio: " + iphone11 + " usd");
                    console.log( "Total del carrito: " + pago + " usd" )
                    alert("se ha agregado al carrito");
                    repeat = Number(prompt("¿Desea seguir viendo productos? (1- Si 2- No)"))
                }else{
                    console.log("No se ha agregado al carrito");
                   repeat = Number(prompt("¿Desea ver otro producto? (1- Si 2- No)"))
                }
                break
            case 5:
                console.log("Iphone 12");
                carrito = Number(prompt("¿Desea agregarlo al carrito? Precio: 560 usd (1- Si 2- No)"))
                if(carrito == 1){
                    pago = pago + iphone12
                    console.log("Se ha agregado el producto al carrito. Precio: " + iphone12 + " usd");
                    console.log( "Total del carrito: " + pago + " usd" )
                    alert("se ha agregado al carrito");
                    repeat = Number(prompt("¿Desea seguir viendo productos? (1- Si 2- No)"))
                }else{
                    console.log("No se ha agregado al carrito");
                   repeat = Number(prompt("¿Desea ver otro producto? (1- Si 2- No)"))
                }
                break
            default:
                console.log("Se ingreso un valor incorrecto");
                alert("Se ingreso un valor incorrecto");
                break
        }
    }
        break
    case 2:
        alert("Gracias por su visita")    
        break
    default:
        console.log("Se ingreso un valor incorrecto");
        alert("Se ingreso un valor incorrecto");
        break
}
}

let comprar = 0
let precioEnPesos = 0

function efectuarCompra(){
    if (pago > 0){
        comprar = Number(prompt("¡Desea efectuar la compra? (1- Si 2- No)"))
        switch(comprar){
            case 1:
                precioEnPesos = pago * 290
                alert("Su saldo a pagar es de $" + precioEnPesos + " o " + pago + "usd" );
                console.log("Saldo a pagar: $" + precioEnPesos);
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
        console.log("No hay nada en el carrito");
    }

}



verCatalogo();
efectuarCompra();

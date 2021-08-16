// tenemos un array de cupones validos:
const coupons = [
    "elPatoLoco",
    "puertas_ventanas",
    "Ricky_Marrofi",
];

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;
};



function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue) {
        case "elPatoLoco":
          descuento = 5;
        break;
        case "puertas_ventanas":
          descuento = 10;
        break;
        case "Ricky_Marrofi":
          descuento = 20;
        break;
      }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento es $" + precioConDescuento;
}
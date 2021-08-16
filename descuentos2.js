
// tenemos un array de cupones validos:
const coupons = [
    "elPato",
    "puertas",
    "Ricky",
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

    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
        } else if (couponValue === "elPato") {
        descuento = 5;
        } else if (couponValue === "puertas") {
        descuento = 10;
        } else if (couponValue === "Ricky") {
        descuento = 20;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento es $" + precioConDescuento;
}
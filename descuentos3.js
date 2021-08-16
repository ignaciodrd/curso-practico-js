
// tenemos un array de cupones validos con su descuento:
const coupons = [
    {
        name: "elPato",
        discount: 5,
    },
    {
        name: "puertas",
        discount: 10,
    },
    {
        name: "Ricky",
        discount: 20,
    },
];

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    // console.log(precioConDescuento)
    return precioConDescuento;
};



function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    };
}
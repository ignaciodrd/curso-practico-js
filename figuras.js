// codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

function perimetroCuadrado(lado) {  
    return lado * 4;
}; 

// console.log('El perimetro del cuadrado mide: ' + perimetroCuadrado+ ' cm');

function areaCuadrado(lado){
    return lado * lado;
};
// console.log('El area del cuadrado mide: ' + areaCuadrado + ' cm^2');
console.groupEnd();

//codigo del triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
};

// altura de triangulo
function alturaTriangulo(lado1, lado2, lado3){
    if (lado1 == lado2 && lado1 != lado3) {
        return Math.sqrt(lado1**2 - (lado3/2)**2)    
    } else if (lado1 == lado3 && lado3 != lado2) {
        return Math.sqrt(lado1**2 - (lado2/2)**2)    
    } else if (lado3 == lado2 && lado3 != lado1){
        return Math.sqrt(lado3**2 - (lado1/2)**2)    
    }
};

// console.log("El perimetro del triangulo 0*mide: " + perimetroTriangulo + "cm");
function areaTriangulo(base, altura){
    return (base*altura)/2;
}
// console.log("El area del triangulo mide: " + areaTriangulo + "cm^2");
console.groupEnd();

// codigo del circulo
console.group("Circulo")

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI
}
function areaCirculo(radio){
    return PI  * radio * radio;
}
console.groupEnd();


// CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
};

// TRIANGULO
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
};

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = Number(input3.value);

    const altura = alturaTriangulo(value1, value2, value3);

    alert(altura);
};


function calcularAreaTriangulo(){
    const inputB = document.getElementById("InputTriangulo3");
    const base = inputB.value;
    const inputH = document.getElementById("InputTriangulo4");
    const height = inputH.value;

    const area = areaTriangulo(base, height);
    alert(area);
};

// CÍRCULO
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
};
console.log("Hola mundo!!");
a= 5
b=6
console.log(a*b);

operacion = (((((5**8))+5)));
console.log(operacion);

txt1="Campus"
txt2="Land";
concatenacion=txt1+txt2;
console.log(concatenacion)
// ******************Funcion sin retorno y sin parametro*************
function funcionNormal(){
    console.log("Mi funcion");

};
// ******************Funcion sin retorno y con parametro*************

function suma(a,b){
    console.log(a+b);
}
suma(7,6)
// ******************Funcion con retorno y con parametro*************
function sumaR(a,b){
    //console.log(a+b);
    return a+b
}
suma(6,6)
console.log(sumaR(5,8) + sumaR(5,12))
// ******************Funcion con retorno y sin parametro*************
function salonfavorito(){
    //console.log(a+b)
    return "P1";
}


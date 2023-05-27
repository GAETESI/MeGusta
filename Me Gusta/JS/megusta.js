document.querySelector ("#btnsumar").addEventListener("click",sumarUno);

var contador=9;

function sumarUno(){
    contador = contador+1;
    document.querySelector("#msgContador").innerHTML=contador;
}

document.querySelector ("#btnsumar2").addEventListener("click", plus);

var plus=12;

function plus(){
    plus = plus+1;
    document.querySelector("#msgContador2").innerHTML=plus;
}

document.querySelector ("#btnsumar3").addEventListener("click", count);

var count=9;

function count(){
    count = count+1;
    document.querySelector("#msgContador3").innerHTML=count;
}





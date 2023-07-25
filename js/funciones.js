function saludar () {
   alert("¡que tranza perro!")
}

function saludo_personalizado() {
    var nombre;
    nombre=prompt("¿Como se llama tu nombre?")
    alert("¡Hola! "+nombre+" ¡Que tranza perro del mal!")
}

function adivinanza1 (){
    var respuesta;
    respuesta=prompt("oro no es plata no es, ¿qué es?")


    /*Si el usuario contesto correctamente*/
    if(respuesta=="PLATANO"){
            alert("¡Felicidades! Te rifaste")
    }

    /*si no es correcto*/
    else{
        alert("¡¡¡¡tonto, está mal!!!!")
    }
}

function adivinanza2 (){
    var respuesta;
    respuesta=prompt("Vuelo de noche, duermo en el día y nunca veras plumas en ala mía.")


    /*Si el usuario contesto correctamente*/
    if(respuesta=="MURCIELAGO"){
            alert("¡Felicidades! Te rifaste")
    }

    /*si no es correcto*/
    else{
        alert("¡¡¡¡tonto, está mal!!!!")
    }
}

function adivinanza3 (){
    var respuesta;
    respuesta=prompt("Canto en la orilla, vivo en el agua, no soy pescado ni cigarra. ¿Quién soy?")


    /*Si el usuario contesto correctamente*/
    if(respuesta=="RANA"){
            alert("¡Felicidades! Te rifaste")
    }

    /*si no es correcto*/
    else{
        alert("¡¡¡¡tonto, está mal!!!!")
    }
}

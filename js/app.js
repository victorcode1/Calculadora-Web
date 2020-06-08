 

var on = true,punto = false,negativo=false,a,b,opcion,acumulador
var display = document.getElementById("display")
var btn1 = document.getElementById("1")
var btns = document.getElementsByClassName("tecla")


Calculadora = (function(numero1,numero2){
    /*2-Desarrolla la funcionalidad de la calculadora utilizando el patrón módulo, 
    es decir que todo el código debe estar englobado en un objeto llamado Calculadora. 
    Utiliza un método de inicialización que se encargue de ejecutar todas las otras funciones 
    que se deben iniciar con la ejecución del programa.*/

    var resultado = 0
   
    function actualizarResultado(nuevoResultado){
            
        resultado = nuevoResultado
        console.log(nuevoResultado)
        display.innerText = nuevoResultado
        acumulador = nuevoResultado
       
    }

    return {
        sumar: function(){
            var resultado = numero1 + numero2
            actualizarResultado(resultado)
        },
        restar: function(){
            var resultado = numero1 - numero2
            actualizarResultado(resultado)
        },
        multiplicar: function(){
            var resultado = numero1 * numero2
            actualizarResultado(resultado)
        },
        dividir: function(){
            var resultado = numero1 / numero2
            actualizarResultado(resultado)
        },
        resultado: function(){
            return resultado
        }
    }

   
})

/*3-Crea los métodos que consideres necesarios para hacer que la tecla presionada reduzca su tamaño y vuelva a su forma original al soltarla.*/

function animacion(num){
    btns[num].addEventListener("mousedown", function(){
        btns[num].setAttribute("style","transform:scale(0.95,0.95)")
        })
        btns[num].addEventListener("mouseout", function(){
            btns[num].setAttribute("style","transform:scale(1,1)")
        })
        
}




 /*4-Para efectos de este proyecto sólo realizaremos las 4 operaciones básicas: suma, resta, multiplicación y división. 
 El botón que indica raíz cuadrada sólo hace parte del diseño general de la calculadora y no es necesario que lo implementes.*/
btns[18].onclick = function(){
    animacion(18)
    //Suma
     a = display.innerText
     opcion = "+"
     punto = false
    display.innerText = ""
    
 }
 
btns[11].onclick = function(){
    animacion(11)
    //Restar
     a = display.innerText
     opcion = "-"
     punto = false
    display.innerText = ""
    
 }

 btns[7].onclick = function(){
    animacion(7)
    //Multiplicar
     a = display.innerText
     opcion = "*"
     punto = false
    display.innerText = ""
    
 }

 btns[3].onclick = function(){
    animacion(3)
    //Dividir
     a = display.innerText
     opcion = "/"
     punto = false
    display.innerText = ""
    
 }



/*5-Crea los métodos que sean necesarios para que al presionar una tecla numérica, se muestre el número correspondiente en la pantalla. 
Debes verificar si en la pantalla se encuentra sólo el número cero, que no se puedan agregar más números cero. Además debes hacer 
que si en pantalla está sólo el cero, al presionar otro número diferente, éste debe reemplazar al cero inicial.*/

btns[4].onclick = function(){
    animacion(4)
    mostrarDisplay("7")
}

btns[5].onclick = function(){
    animacion(5)
    mostrarDisplay("8")
}
btns[6].onclick = function(){
    animacion(6)
    mostrarDisplay("9")
}

btns[8].onclick = function(){
    animacion(8)
    mostrarDisplay("4")
}

btns[9].onclick = function(){
    animacion(9)
    mostrarDisplay("5")
}
btns[10].onclick = function(){
    animacion(10)
    mostrarDisplay("6")
}
btns[12].onclick = function(){
    animacion(12)
    mostrarDisplay("1")
}

btns[13].onclick = function(){
    animacion(13)
    mostrarDisplay("2")
}
btns[14].onclick = function(){
    animacion(14)
    mostrarDisplay("3")
}
 
/*6-Crea un método que al presionar el botón ON/C se borren los números que estén en pantalla y se muestre sólo el número cero*/
btns[0].onclick = function(){
    animacion(0)
    display.innerText = "0" 
    borrarDatos()
}

function borrarDatos(){
    a = "",b="",opcion=""
    on = true
    punto = false
    negativo = false
}



/*7-Crea un método que al presionar la tecla del punto, lo añada a la derecha del número actual que se muestra en pantalla. 
Debes verificar si el punto ya está o no en pantalla para no adicionarlo más de una vez.*/
btns[16].onclick = function(){
   
    if(punto != true){
        if(display.innerText == "0" ){
            mostrarDisplay("0.")
            punto = true
           
        }else{
            if(display.innerText != "0"){
                mostrarDisplay(".") 
                punto = true
            }
        }

    }
   
 
}


btns[15].onclick = function(){
    animacion(15)
    if(display.innerText != "0"){
        mostrarDisplay("0")
    }
   
 }
/*8-Debes crear un método que añada el signo negativo al presionar la tecla +/- a un número en pantalla. Si el número sólo es un cero, no se debe agregar el signo, 
además debes verificar que si el signo menos ya está en pantalla, al presionar la tecla se borre.*/
 
btns[1].onclick = function(){
    animacion(1)
    let cadena = display.innerText
    if(negativo == false && display.innerText == "0"){
        return
            
        }else if(negativo == false && display.innerText != "0"){
            display.innerText=""
            mostrarDisplay("-"+cadena)
            negativo = true
        }


    }
   







function mostrarDisplay(num){
    /*9-Realiza una validación para la pantalla, en la que sólo se puedan mostrar 8 dígitos. Si el número digitado, 
    o el resultado de una operación posee un mayor número de dígitos, se deben mostrar sólo sus primeros 8 dígitos.*/

    if(display.innerText.length < 8){
        if(on){
            display.innerText = ""
            display.innerText = display.innerText + num
            on = false
        }else {
            display.innerText = display.innerText + num
        }
    }else{
        display.innerText = "Coñoooo"
    }
    
   
}

/*10 -El objeto Calculadora debe implementar las cuatro operaciones matemáticas básicas, 
de tal manera que al presionar un número y el signo aritmético, la pantalla quede vacía para indicar que la calculadora está en medio de una operación.
 Posteriormente se muestra el segundo número de la operación en pantalla. Para realizar la operación, 
 debes asignar los métodos necesarios para que al presionar el botón igual, se ejecute el procedimiento correspondiente. Debes realizar métodos que reciban parámetros y retornan valores,*/
    
 btns[17].onclick = function(){
    animacion(17)
    b = display.innerText
    var proceso = Calculadora(Number(a),Number(b))
    switch(opcion){
        case "+": proceso.sumar()
        break;

        case "-": proceso.restar()
        break;

        case "*": proceso.multiplicar()
        break;

        case "/": proceso.dividir()
        break;
    }
}




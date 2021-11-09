var eleccion;
eleccion=prompt("Bienvenido, Elija Su Operacion...(1.-Suma  2.-Resta  3.-Multiplicacion  4.-Division  5.-Raiz cuadrada  6.-Formula General  7.-Binomio Cuadrado"); 
if(eleccion==1){



var num1= prompt("(suma) introduzca un numero:");
var num2= prompt("introduzca el segundo numero:");


alert(parseInt(num1)+parseInt(num2)+' es su resultado ;)');
};
///////////////////////resta///////////////////////////
    if(eleccion==2){
    
        
    var num1= prompt("(Resta) introduzca un numero:");
    var num2= prompt("introduzca el segundo numero:");
    
    
    alert(parseInt(num1)-parseInt(num2)+' es su resultado ;)');
    };
////////////////////////Multi//////////////////////////////////
    if(eleccion==3){
    
        var num1= prompt("(Multiplicacion) introduzca un numero:");
        var num2= prompt("introduzca el segundo numero:");
        
        
        alert(parseInt(num1)*parseInt(num2)+' es su resultado ;)');
        };
//////////////////////////div/////////////////////////////////
if(eleccion==4){
    
    var num1= prompt("(Division) introduzca un numero:");
    var num2= prompt("introduzca el segundo numero:");
    
    
    alert(parseInt(num1)/parseInt(num2)+' es su resultado ;)');
    };
/////////////Raiz/////////////
if(eleccion==5){
    
    var num1= prompt("(Raiz Cuadrada) introduzca un numero:");
    
    alert(parseInt(num1)**parseInt(num1)+' es su resultado ;)');
    };
 ////////////Formula General/////////// 
 if(eleccion==6){
    
    var a=parseInt(prompt("(formula general) variable a:"));
    var b=parseInt(prompt("variable b:"));
    var c=parseInt(prompt("variable c:"));

    var sol1=((-1*-b)+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
    var sol2=((-1*-b)+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);

    alert("solucion 1: "+sol1);
    alert("solucion 2: "+sol2);
  };
  ////////////////Binomio cuadrado////////////////////
  if(eleccion==7){
    
    function obtenerSiguienteCuadradoPerfecto(cuadradoPerfecto){

        
        var raiz = Math.sqrt(cuadradoPerfecto);
    
        
        if (raiz === parseInt(raiz)) {
           
            var siguientecuadradoPerfecto = cuadradoPerfecto + ( (raiz + 1) * 2 ) - 1;
            return siguientecuadradoPerfecto;
    
        }else{
          
            return -1;
        }
    }
    

  };

  
  
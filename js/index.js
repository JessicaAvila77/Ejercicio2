
function calcular(){
    let strn1 = document.getElementById("Nota1").value;
    let strn2 = document.getElementById("Nota2").value;
    let strn3 = document.getElementById("Nota3").value;


    //validaciones, las notas parciales deben ser > 0 y menores que el rango definido para cada una

    if (strn1===""){
        warning('La nota 1 debe contener un valor');
    }else if (strn1 < 0 || strn1 > 30){
        warning('La nota 1 debe ser entre 0 y 30');
    }else if (strn2===""){
        warning('La nota 2 debe contener un valor');
    }else if (strn2 < 0 || strn2 > 30){
        warning('La nota 2 debe ser entre 0 y 30');
    }else if (strn3===""){
        warning('La nota 3 debe contener un valor');
    }else if (strn3 < 0 || strn3 > 40){
        warning('La nota 3 debe ser entre 0 y 40');
    }else{
       

        let n1 = parseFloat(strn1);
        let n2 = parseFloat(strn2);
        let n3 = parseFloat(strn3);

        let suma = (n1 + n2 + n3);

        document.getElementById("Suma").value = suma;

        let msj;

        if (suma >= 0 && suma <= 59){
            msj = 'Reprobado';
        }else if (suma >=60 && suma <= 79){
            msj = 'Bueno';
        }else if (suma >= 80 && suma <= 89){
            msj = 'Muy bueno';
        }else if (suma >= 90 && suma <= 100){
            msj = 'Sobresaliente';
        }

        document.getElementById("Mensaje").value = msj;

    }


}

function limpiar (){
    document.getElementById("Nota1").value="";
    document.getElementById("Nota2").value="";
    document.getElementById("Nota3").value="";
    document.getElementById("Suma").value="";
    document.getElementById("Mensaje").value="";

}

function warning (mensaje){
    Swal.fire(mensaje);
}

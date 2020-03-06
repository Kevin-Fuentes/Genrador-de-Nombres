//VARIABLES 
const generarNombre = document.querySelector('#generar-nombre');

const origen = document.getElementById('origen'); 

const genero = document.querySelector('#genero');

const numero = document.getElementById('numero');

const xhr = new XMLHttpRequest();




// CLASES  


// EVENTLISTENER 

generarNombre.addEventListener('submit',cargarNombres);

// FUNCIONES 

// funcion para tomar los datos.
function cargarNombres(e){
e.preventDefault();

const origenSelecionado = origen.options[origen.selectedIndex].value;

const generoSelecionado = genero.options[genero.selectedIndex].value;

const numeroSelecionado = numero.value;

let url = '';
url = 'https://uinames.com/api/?';

const Datos = {
Ourl : url, 
origen: origenSelecionado,
genero : generoSelecionado,
numero : numeroSelecionado

}




const urlfuncion = añadirDatos(Datos);


}


// funcion para generar nuestra url 


function añadirDatos(Datos){

 if(Datos.origen !==''){

Datos.Ourl+=`region=${Datos.origen}&`

 }
 if(Datos.genero !==''){

     Datos.Ourl+=`gander=${Datos.genero}&`
     
      }

      if(Datos.numero !==''){

          Datos.Ourl+=`amount=${Datos.numero}&`
          
           }

        contectar(Datos.Ourl); 
          
    
}

function contectar (URL){ 

    xhr.open('GET',URL,true);
    xhr.onload = function(){
if(this.status ===200){

 const nombres= JSON.parse(this.responseText);

 let hmtlnombres = '<h2>Nombres Generados</h2>'



 hmtlnombres += '<ul class = "lista" >';

nombres.forEach(element => {
    hmtlnombres += `<li>${element.name}</li>`
});

 hmtlnombres += '<ul>';
 document.getElementById('resultado').innerHTML = hmtlnombres;
}


    }
    xhr.send();
}
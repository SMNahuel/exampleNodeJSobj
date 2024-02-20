

/* Cuandop inicie la pagina ocultamos los inputs */
var input1 = document.getElementById("inputs_1");
input1.style.display = "none";
var input2 = document.getElementById("inputs_2");
input2.style.display = "none";
var select = document.getElementById("selectScreen");
// var inputs1 = document.getElementById("inputs_1");
// var inputs2 = document.getElementById("inputs_2");

select.addEventListener("change", function () {
  ocultarMostrarInp();
});

/* Agregamos un evento escuchador a nuestro select */
input1.addEventListener("change", function () {
  corroborarLongitudInput1();
});

input2.addEventListener("change", function () {
  corroborarInputs2();
});

function ocultarMostrarInp() {
  var input1 = document.getElementById("inputs_1");
  var input2 = document.getElementById("inputs_2");
  /* Obtener la option seleccionada */
  var text = select.options[select.selectedIndex].text;

  /* Vamos a ir mostrando o ocultando los inputs */
  console.log(text);
  if (text !== "Seleccione un valor") {
    input1.style.display = "block";
    input2.style.display = "block";
  } else {
    input1.style.display = "none";
    input2.style.display = "none";
  }
}

function corroborarLongitudInput1() {
  if (document.getElementById("inputs_1").value.length < 8) {
    return alert("Debe tener longitud de 8");
  }
}

//-------------------
/*
  function validar() {
    
    
      for (let i = 0; i < vectorObjetos1.length; i++) {
        if (vectorObjetos1[i].texto1 === text) {
            console.log("ya existe")
       
        }
      }
    }

*/
//-------------------

function corroborarInputs2() {
  if (document.getElementById("inputs_2").value.length === 0) {
    return;
  }
  if (document.getElementById("inputs_2").value.length < 8) {
    return alert("Debe tener longitud de 8 o estar vacio");
  }
}

function guardar() {
  var text = select.options[select.selectedIndex].text;
  console.log(text);
  if (text === "Seleccione un valor") {
    return alert("Seleccione una opcion valida");
  }
  if (document.getElementById("inputs_1").value.length < 8) {
    return alert("Debe tener longitud de 8");
  }
  if (
    document.getElementById("inputs_2").value.length === 0 ||
    document.getElementById("inputs_2").value.length > 7
  ) {
    console.log("si");
    for (let i = 0; i < emails.length; i++) {
      if (emails[i].texto1 === text) {
        console.log(emails);
        emails[i].texto2 = input1.value;
        emails[i].texto3 = input2.value;
      }
    }
    console.log(emails);
    return;
  }
  alert("El segundo input debe ser vacio o tener longitud de 8");
}

//validarUsuario();

//agregarTexto1();

function ocultarMostrarInp() {
  var input1 = document.getElementById("inputs_1");
  var input2 = document.getElementById("inputs_2");
  /* Obtener la option seleccionada */
  var text = select.options[select.selectedIndex].text;

  /* Vamos a ir mostrando o ocultando los inputs */
  console.log(text);
  if (text !== "Seleccione un valor") {
    input1.style.display = "block";
    input2.style.display = "block";
  
/*
    // Buscar el usuario seleccionado
    //var selectedUser = emails.find((user) => user.texto1 === text);
    if (selectedUser) {
      // Asignar los valores de texto2 y texto3 a los inputs
      document.getElementById("inputs_1").value = selectedUser.texto2 || "";
      document.getElementById("inputs_2").value = selectedUser.texto3 || "";
    } else {
      // Limpiar los inputs si no se encuentra el usuario
      document.getElementById("inputs_1").value = "";
      document.getElementById("inputs_2").value = "";
    }
    */
  } else {
    input1.style.display = "none";
    input2.style.display = "none";
  }
}

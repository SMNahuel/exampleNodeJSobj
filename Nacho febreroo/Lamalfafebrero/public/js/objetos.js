class Email {
    constructor(ID, Mail, NombreParaMostrar, Firma) {
        this.ID = ID;
        this.Mail = Mail;
        this.NombreParaMostrar = NombreParaMostrar;
        this.Firma = Firma;
    }
}

class CorreoRecibido {
    constructor(ID, ID_Remitente, Asunto, Mensaje, Fecha, EsImportante, Remitente) {
        this.ID = ID;
        this.ID_Remitente = ID_Remitente;
        this.Asunto = Asunto;
        this.Mensaje = Mensaje;
        this.Fecha = Fecha;
        this.EsImportante = EsImportante;
        this.Remitente = Remitente;
    }
}

const emails = [
    new Email(1, "nfacon@pioix.edu.ar", "Nico Facón", "Docente Desarrollo de Apps"),
    new Email(2, "mrivas@pioix.edu.ar", "Martín Rivas", "Docente Des. App y Proyecto"),
    new Email(3, "alumnosa@pioix.edu.ar", "Alumnos de 5toA Info", "Alumnos 5toA Info"),
    new Email(4, "alumnosb@pioix.edu.ar", "Alumnos de 5toB Info", "Alumnos 5toB Info")
];

const recibidos = [
    new CorreoRecibido(1, 1, "Primer mail", "Este es el primer mail enviado", new Date(), false),
    new CorreoRecibido(2, 1, "Segundo mail", "Este es el segundo mail enviado", new Date(), false),
    new CorreoRecibido(3, 2, "Examen 5to Info", "Dale Nico, largá los mails y prepará el examen", new Date(), true)
];


/*function agregarTexto1() {
    for (let i = 0; i < vectorObjetos1.length; i++) {
        console.log(vectorObjetos1)
      var option = document.createElement("option");
      option.text = vectorObjetos1[i].texto1;
      option.value = "";
      var select = document.getElementById("selectScreen");
      select.appendChild(option);
    }
  }
  
  /* Cuandop inicie la pagina ocultamos los inputs */
  var input1 = document.getElementById("inputs_1")
  input1.style.display = "none";
  var input2 = document.getElementById("inputs_2")
  input2.style.display = "none";
  var select = document.getElementById("selectScreen");
  var inputs1 = document.getElementById("inputs_1");
  var inputs2 = document.getElementById("inputs_2");
  
  select.addEventListener("change", function () {
    ocultarMostrarInp();
  });
  
  /* Agregamos un evento escuchador a nuestro select */
  inputs1.addEventListener("change", function () {
    corroborarLongitudInput1();
  });
  
  inputs2.addEventListener("change", function () {
    corroborarInputs2();
  });
  
  function ocultarMostrarInp() {
    var input1 = document.getElementById("inputs_1");
    var input2 = document.getElementById("inputs_2");
    /* Obtener la option seleccionada */
    var text = select.options[select.selectedIndex].text;
  
    /* Vamos a ir mostrando o ocultando los inputs */
    console.log(text)
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
        console.log("si")
      for (let i = 0; i < vectorObjetos1.length; i++) {
        if (vectorObjetos1[i].texto1 === text) {
            console.log(vectorObjetos1)
          vectorObjetos1[i].texto2 = input1.value;
          vectorObjetos1[i].texto3 = input2.value;
        }
      }
      console.log(vectorObjetos1);
      return;
    }
    alert("El segundo input debe ser vacio o tener longitud de 8");
  }
  
  validarUsuario();

  agregarTexto1();
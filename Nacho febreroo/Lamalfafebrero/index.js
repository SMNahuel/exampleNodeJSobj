/*  Paquetes instalados: -g nodemon, express, express-handlebars, body-parser, mysql2
    Agregado al archivo "package.json" la línea --> "start": "nodemon index"
    
    Proyecto "Node_base"
    Desarrollo de Aplicaciones Informáticas - 5to Informática
    
    Docentes: Nicolás Facón, Martín Rivas
    
    Revisión 1 - Año 2021
*/
//Cargo librerías instaladas y necesarias
const express = require("express"); //Para el manejo del servidor Web
const exphbs = require("express-handlebars"); //Para el manejo de los HTML
const bodyParser = require("body-parser"); //Para el manejo de los strings JSON
const MySQL = require("./modulos/mysql"); //Añado el archivo mysql.js presente en la carpeta módulos

const app = express(); //Inicializo express para el manejo de las peticiones

app.use(express.static("public")); //Expongo al lado cliente la carpeta "public"

app.use(bodyParser.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" })); //Inicializo Handlebars. Utilizo como base el layout "Main".
app.set("view engine", "handlebars"); //Inicializo Handlebars

const Listen_Port = 3000; //Puerto por el que estoy ejecutando la página Web

app.listen(Listen_Port, function () {
  console.log(
    "Servidor NodeJS corriendo en http://localhost:" + Listen_Port + "/"
  );
});

/*
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
    A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
*/

class Email {
  constructor(ID, Mail, NombreParaMostrar, Firma) {
    this.ID = ID;
    this.Mail = Mail;
    this.NombreParaMostrar = NombreParaMostrar;
    this.Firma = Firma;
  }
}

class CorreoRecibido {
  constructor(
    ID,
    ID_Remitente,
    Asunto,
    Mensaje,
    Fecha,
    EsImportante,
    Remitente
  ) {
    this.ID = ID;
    this.ID_Remitente = ID_Remitente;
    this.Asunto = Asunto;
    this.Mensaje = Mensaje;
    this.Fecha = Fecha;
    this.EsImportante = EsImportante;
    this.Remitente = Remitente;
  }
}

const recibidos = [
  new CorreoRecibido(
    1,
    1,
    "Primer mail",
    "Este es el primer mail enviado",
    new Date(),
    false
  ),
  new CorreoRecibido(
    2,
    1,
    "Segundo mail",
    "Este es el segundo mail enviado",
    new Date(),
    false
  ),
  new CorreoRecibido(
    3,
    2,
    "Examen 5to Info",
    "Dale Nico, largá los mails y prepará el examen",
    new Date(),
    true
  ),
];

class Objeto1 {
  constructor(texto1, texto2, texto3) {
    this.texto1 = texto1;
    if (texto2 != null) {
      this.texto2 = texto2;
      this.texto3 = texto3;
    }
  }
}

const emails = [
  new Objeto1("Seleccione un valor"),
  new Objeto1(
    "nfacon@pioix.edu.ar",
    "Nico Facón",
    "Docente Desarrollo de Apps"
  ),
  new Objeto1(
    "mrivas@pioix.edu.ar",
    "Martín Rivas",
    "Docente Des. App y Proyecto"
  ),
  new Objeto1(
    "alumnosa@pioix.edu.ar",
    "Alumnos de 5toA Info",
    "Alumnos 5toA Info"
  ),
  new Objeto1(
    "alumnosb@pioix.edu.ar",
    "Alumnos de 5toB Info",
    "Alumnos 5toB Info"
  ),
];

app.get("/primerapantalla", function (req, res) {
  res.render("primerpantalla", {emails: emails});
});

app.get("/segundapantalla", function (req, res) {
  res.render("segundapantalla");
});
app.get("/tercerapantalla", function (req, res) {
  res.render("tercerapantalla");
});

app.post("/modificarasunto", function (req, res) {

});

app.get("/", function (req, res) {
  //Petición GET con URL = "/", lease, página principal.
  console.log(req.query); //En req.query vamos a obtener el objeto con los parámetros enviados desde el frontend por método GET
  res.render("login", null); //Renderizo página "login" sin pasar ningún objeto a Handlebars
});

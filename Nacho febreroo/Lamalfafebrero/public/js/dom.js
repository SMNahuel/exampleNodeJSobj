/*class Objeto2 {
    constructor(imagen, text1, text2, text3) {
      this.imgName = imagen;
      this.text1 = text1;
      this.text2 = text2;
      this.text3 = text3;
    }
  }
  
  const vectorObjetos2 = [
    new Objeto2("/img/1.jpg", "texto 1", "texto 2", "texto 3"),
    new Objeto2("/img/2.jpg", "texto 1", "texto 2", "texto 3"),
    new Objeto2("/img/3.jpg", "texto 1", "texto 2", "texto 3"),
    new Objeto2("/img/4.jpg", "texto 1", "texto 2", "texto 3")
  ];
  
  
  console.log(vectorObjetos2)
  function mostrarImagenes() {
    let nose= document.getElementById("nose")
    let div = document.getElementById("segundaPantalla");
    console.log(vectorObjetos2)
    for (let i = 0; i < vectorObjetos2.length; i++) {
      let container = document.createElement("div");
      let checkbox = document.createElement("input");
      checkbox.className = "messageCheckbox";
      checkbox.type = "checkbox";
      checkbox.name = "name";
      checkbox.value = "value";
      checkbox.id = `c${i}`;
      let text1 = document.createElement("h3");
      let text2 = document.createElement("h4");
      let text3 = document.createElement("h5");
      let img = document.createElement("img");
      img.src = vectorObjetos2[i].imgName;
      text1.innerHTML = vectorObjetos2[i].text1;
      text2.innerHTML = vectorObjetos2[i].text2;
      text3.innerHTML = vectorObjetos2[i].text3;
      container.id = i;
      container.appendChild(img);
      container.appendChild(checkbox);
      container.appendChild(text1);
      container.appendChild(text2);
      container.appendChild(text3);
      div.appendChild(container);
    }
    nose.style.display="none";
  }
  
  
  
  function eleminarElemento() {
    let select = document.getElementsByClassName("messageCheckbox");
    let div = document.getElementById("segundaPantalla");
    for (let i = 0; i < select.length; i++) {
      if (select[i].checked) {
        console.log(i)
        let element = document.getElementById(i);
        div.removeChild(element)
      }
    }
  
  }
  
function guardarfinal() {
  let indicesSeleccionados = [];
  let botonesSeleccionados = 0;
  for (let i = 0; i < vectorObjetos2.length; i++) {
      let isChecked = document.getElementById(`c${[i]}`).checked;
      if (isChecked) {
          botonesSeleccionados++;
      } else {
          console.log(`no.`);
      }
  }
  if (botonesSeleccionados >= 1) {
      for (let j = 0; j < 4; j++) {
          let isChecked = document.getElementById(`c${[j]}`).checked;
          let div = document.getElementById(`${[j]}`);
          if (isChecked) {
              indicesSeleccionados.push(j);
              div.style.display = "none";
          }
      }
      indicesSeleccionados.reverse();
      for (let k = 0; k < indicesSeleccionados.length; k++) {
          vectorObjetos2.splice(indicesSeleccionados[k], 1);
      }
  } else {
      alert("No hay más de 1 valor verdadero.");
  }
}
*/

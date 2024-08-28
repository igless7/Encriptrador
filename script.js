//permite que el DOM se cargue antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  //selecciona elementos
  const ingresarTexto = document.getElementById("ingresar-texto");
  const botonEncriptar = document.getElementById("boton-encriptar");
  const botonDesencriptar = document.getElementById("boton-desencriptar");
  const btnCopiar = document.getElementById("btn-copiar");
  const mensajeFinal = document.getElementById("mensaje-final");
  const imgElement = document.querySelector(".no-mensaje-img");
  const instruccionTxtVacio = document.getElementById("instruccion-txt-vacio");
  //vocal a reemplazar
  const reemplazar = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  //recorre el array reemplazar y evalua si el texto incluye la vocal que esta evaluando en ese momento y reemplaza todas las coincidencias
  const encriptarMensaje = (texto) => {
    for (let i = 0; i < reemplazar.length; i++) {
      if (texto.includes(reemplazar[i][0])) {
        texto = texto.replaceAll(reemplazar[i][0], reemplazar[i][1]);
      }
    }
    return texto;
  };
let texto = ingresarTexto.value;
  //al dar click en el btn encriptar obtiene el valor del input y evalua, si no esta vacio llama a la funcion encriptarMensaje y valor retornado lo guarda en textoEncriptado que mensajeFinal con innerHTML lo muestra
  botonEncriptar.addEventListener("click", () => {
     texto = ingresarTexto.value;
    if (texto !== "") {
      const textoEncriptado = encriptarMensaje(texto.toLowerCase());
      mensajeFinal.innerHTML = textoEncriptado;
      imgElement.src = './img/texto-exitoso.png';
      instruccionTxtVacio.style.display = "none";
    } else {
      mensajeFinal.innerHTML = "Por favor, ingresa un texto";
    }
  });

  btnCopiar.addEventListener("click", () => {
    const texto = mensajeFinal.innerHTML;
    navigator.clipboard.writeText(texto);
  });
});
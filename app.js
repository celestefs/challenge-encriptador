const encriptarBtn = document.getElementById('encriptar');
const mostrarBtn = document.getElementById('copiar');
const elementosAOcultar = document.querySelectorAll('.ocultar');
const textArea = document.getElementById('codificar');
const textoEncriptado = document.getElementById('texto-encriptado');
const mensaje = "";

encriptarBtn.addEventListener('click', function() {
  textoEncriptado.style.display = 'initial';
  mostrarBtn.style.display = 'initial';
  elementosAOcultar.forEach(elemento => elemento.style.display = 'none');
});

function botonEncriptar() {
  const msjeEncriptado = encriptar(textArea.value);
  textoEncriptado.value = msjeEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptado) {
  let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase();

  for(let i = 0; i < codigo.length; i++) {
    if(stringEncriptado.includes(codigo[i][0])) {
        stringEncriptado = stringEncriptado.replaceAll(codigo[i][0], codigo[i][1])
    }
  }
  return stringEncriptado;
}

function botonDesencriptar() {
  const msjeDesencriptado = desencriptar(textArea.value);
  textoEncriptado.value = msjeDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptado) {
  let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for(let i = 0; i < codigo.length; i++) {
    if(stringDesencriptado.includes(codigo[i][1])) {
        stringDesencriptado = stringDesencriptado.replaceAll(codigo[i][1], codigo[i][0])
    }
  }
  return stringDesencriptado;
}

function botonCopiar() {
  const mensajeExito = document.getElementById('mensajeExito');
  const mensaje = textoEncriptado.value;
  navigator.clipboard.writeText(mensaje)
    .then(() => {
      mensajeExito.style.display = 'block'; 
      setTimeout(() => {
        mensajeExito.style.display = 'none';
      }, 3000);
    })
    .catch((error) => {
      console.error('Error al copiar el texto al portapapeles: ', error);
    });
}
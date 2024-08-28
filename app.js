// Mapeo de las letras a sus sustituciones y viceversa
const encriptaciones = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptaciones = Object.fromEntries(
    Object.entries(encriptaciones).map(([key, value]) => [value, key])
);

// Función para encriptar una letra
function encriptarLetra(letra) {
    return encriptaciones[letra] || letra;
}

// Función para desencriptar una letra
function desencriptarLetra(letra) {
    return desencriptaciones[letra] || letra;
}

// Encripta el texto
function encriptarTexto() {
    const textoNormal = document.getElementById('texto').value;
    const textoEncriptado = textoNormal.replace(/[aeiou]/gi, encriptarLetra);
    document.getElementById('texto2').textContent = textoEncriptado;
    mostrarBotonCopiar();
    ocultarEtiquetas();
}

// Desencripta el texto
function desencriptarTexto() {
    const textoEncriptado = document.getElementById('texto').value;
    const textoDesencriptado = textoEncriptado.replace(/ai|enter|imes|ober|ufat/g, desencriptarLetra);
    document.getElementById('texto2').textContent = textoDesencriptado;
}

// Oculta las etiquetas de mensaje
function ocultarEtiquetas() {
    document.querySelectorAll('.munecoPng, .texto__no__encontrado, .ingresa__texto__encriptar').forEach(etiqueta => {
        etiqueta.style.display = 'none';
    });
}

// Muestra el botón de copiar
function mostrarBotonCopiar() {
    document.querySelector('.boton__copiar').style.display = 'block';
}

// Copia el texto al portapapeles
function copiarTexto() {
    const elemento = document.querySelector('.presentacion__desencriptar__texto__usuario');
    if (elemento) {
        const textoCopiado = elemento.textContent || elemento.innerText;
        navigator.clipboard.writeText(textoCopiado).catch(err => console.error('Error al copiar el texto: ', err));
    }
}

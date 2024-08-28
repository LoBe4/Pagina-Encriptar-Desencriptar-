let textoNormal = '';

function encriptar(cambioPalabra) {
    switch (cambioPalabra) {
        case 'a':
            return 'ai';
        case 'e':
            return 'enter';
        case 'i':
            return 'imes';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';
        default:
            return cambioPalabra;
    }
}

function desencriptar() {
    let textoEncriptado = document.getElementById('texto').value;

    textoEncriptado = textoEncriptado.replace(/ai/g, 'a');
    textoEncriptado = textoEncriptado.replace(/enter/g, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/g, 'i');
    textoEncriptado = textoEncriptado.replace(/ober/g, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/g, 'u');

    document.getElementById('texto2').textContent = textoEncriptado;
}

function encriptarTexto() {
    const textoNormal = document.getElementById('texto').value;
    const textoEncriptado = textoNormal.replace(/[aeiou]/gi, encriptar);
    document.getElementById('texto2').textContent = textoEncriptado;
    mostrarBotonCopiar();
    ocultarEtiqueta();
}

function ocultarEtiqueta() {
    const etiquetas = [
        '.munecoPng',
        '.texto__no__encontrado',
        '.ingresa__texto__encriptar'
    ];

    etiquetas.forEach(selector => {
        const elemento = document.querySelector(selector);
        if (elemento) {
            elemento.style.display = 'none';
        }
    });
}

function mostrarBotonCopiar() {
    const boton = document.querySelector('.boton__copiar');
    if (boton) {
        boton.style.display = 'block';
    }
}

function copiar() {
    const elemento = document.querySelector('.presentacion__desencriptar__texto__usuario');
    if (elemento) {
        const textoCopiado = elemento.textContent || elemento.innerText;
        navigator.clipboard.writeText(textoCopiado);
    }
}

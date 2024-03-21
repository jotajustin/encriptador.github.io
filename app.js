function encriptar(texto) {
    texto_encriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    return texto_encriptado;
}
function validarTexto() {
    const textarea = document.getElementById("textareatexto");
    const errorMessage = document.querySelector(".error-message");

    const regex = /[^a-zA-Z0-9\s]/;
    
    if (regex.test(textarea.value)) {
        alert("Se han ingresado caracteres en mayúsculas o especiales. El campo de texto se borrará.");
        textarea.value = ""; // Borrar el contenido del campo de texto
        textarea.focus(); // Poner el foco en el campo de texto
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }
}

function desencriptar(texto_encriptado) {
    texto_original = texto_encriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    return texto_original;
}

function ejecutarAccion() {
    var accion = document.getElementById("accion").value;
    var texto = document.getElementById("textareatexto").value.toLowerCase();
    var resultado;

    if (accion === "encriptar") {
        resultado = encriptar(texto);
    } else if (accion === "desencriptar") {
        resultado = desencriptar(texto);
    } else {
        alert("Opción no válida. Por favor, elige 'encriptar' o 'desencriptar'.");
        return;
    }

    document.getElementById("texto-encriptado").value= (resultado);

}

function copiarTexto() {
    var textarea = document.getElementById("texto-encriptado");
    textarea.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}


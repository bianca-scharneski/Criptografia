function EscolhaBase64() {
    /* document.write("Base 64")*/
    alert("descriptografou")
}
function alteracaoSelect(select) {

    var x = document.getElementById("quantity");
    if (select.options[select.selectedIndex].value == 1) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("insiraChave");
    if (select.options[select.selectedIndex].value == 1) {
        x.style.display = "none";
    } else {
        y.style.display = "block";
    }
}
function alterarRB(param) {
    var botao = document.getElementById("botaoCriptografa");
    if (param == 2) {
        botao.innerHTML = "Descriptografar";

    } else {
        botao.innerHTML = "Criptografar";
    }
}
function criptografia() {

    var select = document.getElementById("selecaoCriptografia");
    var texto1 = document.getElementById("caixaDeTexto").value;
    var texto = texto1.toUpperCase();
    var resultado = document.getElementById("resultadoCaixa");
    var chaveCesar = document.getElementById("quantity").value;

    console.log(texto)
    console.log(chaveCesar)
    var criptografaDescriptografa = document.getElementById("Criptografar");
    if (criptografaDescriptografa.checked == true) {
        if (select.options[select.selectedIndex].value == 1) {
            resultado.value = btoa(texto1)

        } else {
            var txtResultado = ""
            //criptografar 
            for (i = 0; i < texto.length; i++) {
                console.log(texto.charCodeAt(i))
                var textoASC = parseInt(texto.charCodeAt(i)) + parseInt(chaveCesar)
                if (textoASC > 90) { 
                    textoASC = textoASC - 26 
                }
                console.log(textoASC)
                txtResultado += String.fromCharCode(textoASC)

            }
            resultado.value = (txtResultado)
      

        }

    } else {

        if (select.options[select.selectedIndex].value == 1) {
            resultado.value = atob(texto1)
        } else {
            var txtResultado2= ""
            for (i = 0; i < texto.length; i++) {
                console.log(texto.charCodeAt(i))
                var textoASC = parseInt(texto.charCodeAt(i)) - parseInt(chaveCesar)
                if (textoASC < 65) { 
                    textoASC = textoASC - 26 
                }
                console.log(textoASC)
                txtResultado2 += String.fromCharCode(textoASC)
            }
            resultado.value = (txtResultado2)
        }

    }
}

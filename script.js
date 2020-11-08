import * as sc from "./smallcrypt/index.js";

document.getElementById("btnCript").addEventListener("click", function () {
  let pure = document.getElementById("idcifra").value;
  let key = Number(document.getElementById("key").value);
  let selected = document.getElementById("methods").value;
  let cifra = "";
  if (selected === "caesar") {
    cifra = sc.caesar("encrypt", pure, key);
    document.getElementById("idcripta").innerHTML = cifra;
  } else if (selected === "vigenere") {
    console.log("Vigenere selecionado");
  } else {
    console.log("opção inválida");
  }
});

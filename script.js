function criptografar() {
  let valorDoInput = document.getElementById("texto").value;
  let tabelaCriptografias = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  let novaPalavra = "";
  for (let i = 0; i < valorDoInput.length; i++) {
    let letra = valorDoInput[i];
    if (tabelaCriptografias[letra]) {
      novaPalavra += tabelaCriptografias[letra];
    } else {
      novaPalavra += letra;
    }
  }
  let elementoP = document.getElementById("bold");
  elementoP.textContent = novaPalavra;
}

function descriptografar() {
  let valorDoInput = document.getElementById("bold").textContent;
  let tabelaDescriptografias = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  let novaFrase = valorDoInput.replace(
    /ai|enter|imes|ober|ufat/gi,
    function (matched) {
      return tabelaDescriptografias[matched];
    }
  );
  let elementoP = document.getElementById("bold");
  elementoP.textContent = novaFrase;
}




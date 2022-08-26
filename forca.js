let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
var palavras = [
  (palavra001 = {
    nome: "IRLANDA",
    categoria: "LUGARES",
  }),
  (palavra002 = {
    nome: "ORLANDO",
    categoria: "LUGARES",
  }),
  (palavra003 = {
    nome: "INDONESIA",
    categoria: "LUGARES",
  }),
  (palavra004 = {
    nome: "CHILE",
    categoria: "LUGARES",
  }),
  (palavra005 = {
    nome: "EQUADOR",
    categoria: "LUGARES",
  }),
  (palavra006 = {
    nome: "GROELANDIA",
    categoria: "LUGARES",
  }),
  (palavra007 = {
    nome: "UZBEQUISTAO",
    categoria: "LUGARES",
  }),
  (palavra008 = {
    nome: "CANADA",
    categoria: "LUGARES",
  }),
  (palavra009 = {
    nome: "CHINA",
    categoria: "LUGARES",
  }),
  (palavra010 = {
    nome: "TAIWAN",
    categoria: "LUGARES",
  }),
  (palavra011 = {
    nome: "STAVANGER",
    categoria: "LUGARES",
  }),
  (palavra012 = {
    nome: "BICICLETA",
    categoria: "TRANSPORTE",
  }),
  (palavra013 = {
    nome: "LANCHA",
    categoria: "TRANSPORTE",
  }),
  (palavra014 = {
    nome: "TELEFERICO",
    categoria: "TRANSPORTE",
  }),
  (palavra015 = {
    nome: "NAVIO",
    categoria: "TRANSPORTE",
  }),
  (palavra016 = {
    nome: "AERONAVE",
    categoria: "TRANSPORTE",
  }),
  (palavra017 = {
    nome: "BARCO",
    categoria: "TRANSPORTE",
  }),
  (palavra018 = {
    nome: "CARRO",
    categoria: "TRANSPORTE",
  }),
  (palavra019 = {
    nome: "MOTOCICLETA",
    categoria: "TRANSPORTE",
  }),
  (palavra020 = {
    nome: "CAIAQUE",
    categoria: "TRANSPORTE",
  }),
  (palavra021 = {
    nome: "AVIAO",
    categoria: "TRANSPORTE",
  }),
  (palavra022 = {
    nome: "COMPUTADOR",
    categoria: "OBJETOS",
  }),
  (palavra023 = {
    nome: "AVIAO",
    categoria: "TRANSPORTE",
  }),
  (palavra024 = {
    nome: "SINO",
    categoria: "OBJETOS",
  }),
  (palavra025 = {
    nome: "CHUVEIRO",
    categoria: "OBJETOS",
  }),
  (palavra026 = {
    nome: "TAMBORETE",
    categoria: "OBJETOS",
  }),
  (palavra027 = {
    nome: "LAMPADA",
    categoria: "OBJETOS",
  }),
  (palavra028 = {
    nome: "BOCAL",
    categoria: "OBJETOS",
  }),
  (palavra029 = {
    nome: "CORTINA",
    categoria: "OBJETOS",
  }),
  (palavra030 = {
    nome: "LAPIS",
    categoria: "OBJETOS",
  }),
  (palavra031 = {
    nome: "MELANCIA",
    categoria: "ALIMENTOS",
  }),
  (palavra032 = {
    nome: "AMENDOIM",
    categoria: "ALIMENTOS",
  }),
  (palavra033 = {
    nome: "ESFIRRA",
    categoria: "ALIMENTOS",
  }),
  (palavra034 = {
    nome: "GOROROBA",
    categoria: "ALIMENTOS",
  }),
  (palavra035 = {
    nome: "JANTAR",
    categoria: "ALIMENTOS",
  }),
  (palavra036 = {
    nome: "SABOROSO",
    categoria: "ALIMENTOS",
  }),
  (palavra037 = {
    nome: "DESJEJUM",
    categoria: "ALIMENTOS",
  }),
  (palavra038 = {
    nome: "MASTIGAR",
    categoria: "ALIMENTOS",
  }),
  (palavra039 = {
    nome: "ENGOLIR",
    categoria: "ALIMENTOS",
  }),
  (palavra040 = {
    nome: "DOCERIA",
    categoria: "ALIMENTOS",
  }),
  (palavra040 = {
    nome: "DRAGAO",
    categoria: "ANIMAIS",
  }),
  (palavra041 = {
    nome: "GALINHA",
    categoria: "ANIMAIS",
  }),
  (palavra042 = {
    nome: "PAVAO",
    categoria: "ANIMAIS",
  }),
  (palavra043 = {
    nome: "CAMELO",
    categoria: "ANIMAIS",
  }),
  (palavra044 = {
    nome: "PERU",
    categoria: "ANIMAIS",
  }),
  (palavra045 = {
    nome: "ZEBRA",
    categoria: "ANIMAIS",
  }),
  (palavra046 = {
    nome: "DROMEDARIO",
    categoria: "ANIMAIS",
  }),
  (palavra047 = {
    nome: "CALANGO",
    categoria: "ANIMAIS",
  }),
  (palavra048 = {
    nome: "SAGUI",
    categoria: "ANIMAIS",
  }),
  (palavra049 = {
    nome: "LAGARTIXA",
    categoria: "ANIMAIS",
  }),
  (palavra050 = {
    nome: "HIPOPOTAMO",
    categoria: "ANIMAIS",
  }),
  (palavra051 = {
    nome: "A ERA DO GELO",
    categoria: "TV E CINEMA",
  }),
  (palavra052 = {
    nome: "HOMEM ARANHA",
    categoria: "TV E CINEMA",
  }),
  (palavra053 = {
    nome: "CASA MONSTRO",
    categoria: "TV E CINEMA",
  }),
  (palavra054 = {
    nome: "TELA QUENTE",
    categoria: "TV E CINEMA",
  }),
  (palavra055 = {
    nome: "STRANGER THINGS",
    categoria: "TV E CINEMA",
  }),
  (palavra056 = {
    nome: "O REI DO GADO",
    categoria: "TV E CINEMA",
  }),
  (palavra057 = {
    nome: "MULHER MARAVILHA",
    categoria: "TV E CINEMA",
  }),
  (palavra058 = {
    nome: "O INCRIVEL HULK",
    categoria: "TV E CINEMA",
  }),
  (palavra059 = {
    nome: "BOB ESPONJA",
    categoria: "TV E CINEMA",
  }),
  (palavra060 = {
    nome: "PANICO NA TV",
    categoria: "TV E CINEMA",
  }),
  (palavra061 = {
    nome: "RIVERDALE",
    categoria: "TV E CINEMA",
  }),
  (palavra062 = {
    nome: "FACEBOOK",
    categoria: "EMPRESA",
  }),
  (palavra063 = {
    nome: "GOOGLE",
    categoria: "EMPRESA",
  }),
  (palavra064 = {
    nome: "SAMSUNG",
    categoria: "EMPRESA",
  }),
  (palavra065 = {
    nome: "COLGATE",
    categoria: "EMPRESA",
  }),
  (palavra066 = {
    nome: "NETFLIX",
    categoria: "EMPRESA",
  }),
  (palavra067 = {
    nome: "VIVO",
    categoria: "EMPRESA",
  }),
  (palavra068 = {
    nome: "ADOBE",
    categoria: "EMPRESA",
  }),
  (palavra069 = {
    nome: "BREAKING BAD",
    categoria: "TV E CINEMA",
  }),
  (palavra070 = {
    nome: "VINGADORES",
    categoria: "TV E CINEMA",
  }),
  (palavra071 = {
    nome: "CORINGA",
    categoria: "TV E CINEMA",
  }),
  (palavra072 = {
    nome: "WALL E",
    categoria: "TV E CINEMA",
  }),
  (palavra073 = {
    nome: "JURASSIC PARK",
    categoria: "TV E CINEMA",
  }),
  (palavra074 = {
    nome: "ESQUADRAO SUICIDA",
    categoria: "TV E CINEMA",
  }),
  (palavra075 = {
    nome: "THE WALKING DEAD",
    categoria: "TV E CINEMA",
  }),
  (palavra076 = {
    nome: "QUARTETO FANTASTICO",
    categoria: "TV E CINEMA",
  }),
];
criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length);

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
  console.log(palavraSecretaSorteada);
  console.log(palavraSecretaCategoria);
}
mostrarpalavratela();
function mostrarpalavratela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavratela = document.getElementById("palavra-secreta");
  palavratela.innerHTML = "";

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      if (palavraSecretaSorteada[i] == " ") {
        listaDinamica[i] = " ";
        palavratela.innerHTML =
          palavratela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        listaDinamica[i] = "&nbsp;";
        palavratela.innerHTML =
          palavratela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    } else {
      if (palavraSecretaSorteada[i] == " ") {
        listaDinamica[i] = " ";
        palavratela.innerHTML =
          palavratela.innerHTML +
          "<div class='letrasEspaco'>" +
          listaDinamica[i] +
          "</div>";
      } else {
        palavratela.innerHTML =
          palavratela.innerHTML +
          "<div class='letras'>" +
          listaDinamica[i] +
          "</div>";
      }
    }
  }
}
function verificaLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;

  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparalistas(letra);
    mostrarpalavratela();
  }
}
function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "red";

  document.getElementById(tecla).style.color = "#fff";
}
function comparalistas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--;
    carregaImagemForca();
    if (tentativas == 0) {
      abremodal(
        "OPS!",
        "Nao foi dessa vez ... a palavra secreta era <br/>" +
          palavraSecretaSorteada,
        "clique no controle para jogar novamente..."
      );
    }
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }
  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }

  if (vitoria == true) {
    abremodal("Parabens!", "Voce Venceu!!... <br/> ");
    tentativas = 0;
  }
}
function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url('./img/forca01.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url('./img/forca02.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url('./img/forca03.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url('./img/forca04.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url('./img/forca05.png')";
      break;
    case 0:
      document.getElementById("imagem").style.background =
        "url('./img/forca06.png')";
      break;
    default:
      document.getElementById("imagem").style.background =
        "url('./img/forca.png')";
      break;
  }
}

function abremodal(titulo, mensagem) {
  let modalTiulo = document.getElementById("exampleModalLabel");
  modalTiulo.innerText = titulo;
  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;

  $("#myModal").modal({
    show: true,
  });
}
let btnReiniciar = document.querySelector("#btnReiniciar");
btnReiniciar.addEventListener("click", function () {
  location.reload();
});

let xEscola = 270;
let yEscola = 533;

let xBanco = 88;
let yBanco = 241;

let xIgreja = 655;
let yIgreja = 514;

let xCasa = 470;
let yCasa = 240;

let mapa;

function preload() {
  mapa = loadImage("angelica.jpg");
}

function setup() {
  createCanvas(800, 600);
  textSize(14);
  textWrap(WORD);
}

function draw() {
  background(255);
  image(mapa, 0, 0, width, height);

  fill(0);
  textSize(16);
  text("x: " + mouseX + " y: " + mouseY, 10, 20);

  stroke(0);
  strokeWeight(2);

  line(xEscola, yEscola, xBanco, yBanco);
  line(xCasa, yCasa, xIgreja, yIgreja);
  line(xCasa, yCasa, xBanco, yBanco);
  line(xCasa, yCasa, xEscola, yEscola);

  noStroke();
  fill("red");
  ellipse(xBanco, yBanco, 15, 15);
  fill("green");
  ellipse(xEscola, yEscola, 15, 15);
  fill("rgb(187,0,255)");
  ellipse(xCasa, yCasa, 15, 15);
  fill("orange");
  ellipse(xIgreja, yIgreja, 15, 15);

  textSize(14);

  function mostrarTextoComFundo(txt, x, y) {
    let larguraTexto = 200;
    let alturaTexto = 160; // maior altura agora
    x = constrain(x, 10, width - larguraTexto - 10);
    y = constrain(y, 30, height - alturaTexto - 10);

    fill(0, 150);
    rect(x - 5, y - 18, larguraTexto + 10, alturaTexto, 5);

    fill(255);
    text(txt, x, y, larguraTexto);
  }

  if (dist(mouseX, mouseY, (xBanco + xCasa) / 2, (yBanco + yCasa) / 2) < 20) {
    mostrarTextoComFundo(
      "A ligação entre o Banco do Brasil e a Casa no Campo representa a dependência do meio rural dos serviços urbanos, como crédito e pagamentos.",
      (xBanco + xCasa) / 2,
      (yBanco + yCasa) / 2
    );
  }

  if (dist(mouseX, mouseY, (xEscola + xCasa) / 2, (yEscola + yCasa) / 2) < 20) {
    mostrarTextoComFundo(
      "A escola rural e a casa caminham juntas, trocando saberes e fortalecendo os laços da vida no campo. Juntas, elas ensinam, cuidam e transformam o dia a dia das famílias com carinho e conhecimento.",
      (xEscola + xCasa) / 2,
      (yEscola + yCasa) / 2
    );
  }

  if (dist(mouseX, mouseY, (xCasa + xIgreja) / 2, (yCasa + yIgreja) / 2) < 20) {
    mostrarTextoComFundo(
      "A casa e a igreja se conectam na vivência da fé, dos valores e do respeito ao próximo. Juntas, elas fortalecem o coração das famílias, guiando atitudes com amor, esperança e união.",
      (xCasa + xIgreja) / 2,
      (yCasa + yIgreja) / 2
    );
  }

  if (dist(mouseX, mouseY, (xEscola + xBanco) / 2, (yEscola + yBanco) / 2) < 20) {
    mostrarTextoComFundo(
      "O banco e a escola se unem para ensinar o valor do dinheiro, da economia e do planejamento. Juntos, ajudam os alunos a sonhar, poupar e construir um futuro com mais consciência e responsabilidade.",
      (xEscola + xBanco) / 2,
      (yEscola + yBanco) / 2
    );
  }
}

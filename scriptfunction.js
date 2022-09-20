function adicionarNaTabela(){
    var elemento = ""
    var tabela = document.getElementById('tabelaJogadores')
    for (var i in jogadores){
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento +=
          "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento +=
          "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento +=
          "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }
    tabela.innerHTML = elemento
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias ++
  jogador.pontos = calculaPontos(jogadores[i])
  adicionarNaTabela(jogadores)
  vencedor()
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates ++
  jogador.pontos = calculaPontos(jogadores[i])
  adicionarNaTabela(jogadores)
  vencedor()
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas ++
  adicionarNaTabela(jogadores)
}

function vencedor(x){
  adicionarNaTabela(jogadores)
    var resultado = document.getElementById('resultadoJogo')
    for (var winner in jogadores){
        if (jogadores[winner].pontos >= pontosWin){
            resultado.innerHTML = `<h1>Parabens ${jogadores[winner].nome} Você venceu!!</h1>`
            tabelaJogo.hidden = true
          }
    }
}

function iniciarJogo(){
  var escolhaPontos = document.getElementById('pontoLimite')
  var tabelaJogo = document.getElementById('tabelaJogo')
  escolhaPontos.hidden = true
  tabelaJogo.hidden = false
  var radio = document.getElementsByName('limitePontos')
  if (radio[0].checked) {
    pontosWin = 10
  }else if(radio[1].checked){
    pontosWin = 20
  }else if(radio[2].checked){
    pontosWin = 30
  }
  adicionarNaTabela()
}
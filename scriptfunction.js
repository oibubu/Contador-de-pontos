var jogadores = []
var pontosWin = ''


function adicionarJogador(){
  var newPlayer = document.getElementById('nomeJogadores').value
  var resultado = document.getElementById('resultadoJogo')
  if (newPlayer.length == 0){
    window.alert('Adicione pelo menos um nome!')
  }else{
    jogadores.push({'nome' : newPlayer, 'vitorias' : 0, 'empates' : 0, 'derrotas' : 0, 'pontos' :0})
  }
  resultado.innerHTML = ""
  for (i in jogadores){
    resultado.innerHTML += "<p class='noMargin'>" + jogadores[i].nome + "</p>"
  }
  document.getElementById('nomeJogadores').value = ''
  document.getElementById('nomeJogadores').focus()
  adicionarNaTabela()
}

function mostrarTabela(){
  if (jogadores.length < 2){
    window.alert('Adicione pelo menos 2 jogadores!')
  }else {
    document.getElementById('jogadores').hidden = true
    document.getElementById('tabelaJogo').hidden = false
    document.getElementById('resultadoJogo').innerHTML = ''
  }
}

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

function voltarParaAdicao(){
  document.getElementById('jogadores').hidden = false
  document.getElementById('tabelaJogo').hidden = true
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias ++
  jogador.pontos = calculaPontos(jogadores[i])
  vencedor(jogadores[i])
  adicionarNaTabela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates ++
  jogador.pontos = calculaPontos(jogadores[i])
  vencedor(jogadores[i])
  adicionarNaTabela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas ++
  adicionarNaTabela(jogadores)
}

function vencedor(x){
  var resultado = document.getElementById('resultadoJogo')
      if (x.pontos >= pontosWin){
          resultado.innerHTML = `<h1>Parabens ${x.nome} Você venceu!!</h1>`
          tabelaJogo.hidden = true
        }
}

function iniciarJogo(){
  document.getElementById('pontoLimite').hidden = true
  document.getElementById('jogadores').hidden = false
  pontosWin = document.getElementById('limitePontos').value
  adicionarNaTabela()
}

function resetarPontos(){
  for (var i in jogadores){
    jogadores[i].vitorias = 0
    jogadores[i].empates = 0
    jogadores[i].derrotas = 0
    jogadores[i].pontos = 0
  }
  adicionarNaTabela(jogadores)
}
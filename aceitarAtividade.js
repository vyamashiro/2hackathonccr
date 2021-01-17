function aceitarAtividade() {
    pontosAtividade = 35
    pontuacaoAtual = localStorage.getItem('pontuação')
    novaPontuacao = pontuacaoAtual != null ? parseInt(pontuacaoAtual) + parseInt(pontosAtividade) : pontuacaoAtual = pontosAtividade
    localStorage.setItem('pontuação', novaPontuacao)
    $('#modalExemplo').modal('hide');
}

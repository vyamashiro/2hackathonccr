function aceitarAtividade() {
    pontosAtividade = 10
    pontuacaoAtual = localStorage.getItem('pontuação')
    novaPontuacao = pontuacaoAtual != null ? parseInt(pontuacaoAtual) + parseInt(pontosAtividade) : pontuacaoAtual = pontosAtividade
    localStorage.setItem('pontuação', novaPontuacao)
}

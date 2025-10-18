const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const imagensTroca1 = document.getElementById(`0-imagem-miniatura`)
const imagensTroca2 = document.getElementById(`1-imagem-miniatura`)
const imagensTroca3 = document.getElementById(`2-imagem-miniatura`)
const tituloProduto = document.getElementById('titulo-produto')
const cor = document.getElementById('nome-cor-selecionada')
const verdeCipreste = {
    nome:'verde-cipreste', // nome da cor
    pasta:'imagens-verde-cipreste' // nome da pasta
}
const azulInverno = {
    nome:'azul-inverno', // nome da cor
    pasta:'imagens-azul-inverno' // nome da pasta
}
const meiaNoite = {
    nome:'meia-noite', // nome da cor
    pasta:'imagens-meia-noite' // nome da pasta
}
const estelar = {
    nome:'estelar', // nome da cor
    pasta:'imagens-estelar' // nome da pasta
}
const rosaClaro = {
    nome:'rosa-claro', // nome da cor
    pasta:'imagens-rosa-claro' // nome da pasta
}
const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro]
const opcoesTamanho = ['41 mm', '45 mm']
let imagemSelecionada = 1
let tamanhoSelecionado = 1
let corSelecionada = 1
function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = idOpcaoSelecionada.charAt(0)
    imagemVisualizacao.src=`./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`
}
function trocarTamanho(){
    const idTamanhoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idTamanhoSelecionada.charAt(0)
    tituloProduto.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    }
    else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }

}
function trocarCor(){
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idCorSelecionada.charAt(0)
    cor.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    imagemVisualizacao.src=`./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`
    imagensTroca1.src=`./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`
    imagensTroca2.src=`./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`
    imagensTroca3.src=`./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`
}
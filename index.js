class Produto{
    constructor(nome, cor, estaAtivo){
        this.nomeDisplay = document.querySelector('#card-nome');
        this.preview = document.querySelector('.card-preview');
        this.estaAtivo = false;
    }

    atualizarTexto(novoTexto){
        this.nomeDisplay.innerText = novoTexto;
    }

    mudarCor(novaCor){
        this.preview.style.backgroundColor = novaCor;
    }

    alternarStatus(){
        this.estaAtivo = !this.estaAtivo;

        if (this.estaAtivo)
            this.preview.style.border = 'green solid 5px';
        else if (!this.estaAtivo)
            this.preview.style.border = 'red solid 5px';
    }
}

const produto = new Produto();

document.querySelector('#in-nome').addEventListener('input', (event) => {
    produto.atualizarTexto(event.target.value);
});

document.querySelector('#in-cor').addEventListener('input', (event) => {
    produto.mudarCor(event.target.value);
});

document.querySelector('.card-preview').addEventListener('contextmenu', (event) => {
    event.preventDefault();
    produto.alternarStatus();
});
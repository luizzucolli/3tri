function criarCartao(tema, pergunta, resposta){
    const container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = ` 
                <div class="cartao-conteudo">
                    <h3> ${tema} </h3>
                    <div class="cartao-conteudo-pergunta">
                        ${pergunta}
                    </div>
                    <div class="cartao-conteudo-resposta">
                       ${resposta}
                    </div>
                </div> 
            `
container.appendChild(cartao)
}

criarCartao(`história`,`Em que ano começou a guerra do vietnã?`,`Em 1955`)

criarCartao(`português`,`o que é uma paroxitona?`,`Uma paroxitona é uma palavra cuja sílaba tônica é penútima`)
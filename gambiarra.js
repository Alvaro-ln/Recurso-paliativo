javascript:(function(){

if(window.__botaoClienteAtivo)return;
window.__botaoClienteAtivo=true;

function criarOuAtualizarBotao(){
  const el=document.querySelector('#interaction-header-participant-name');
  if(!el)return;

  const match=el.textContent.match(/\[(\d+)\]/);
  if(!match)return;

  const id=match[1];
  const url='https://novorevan.brisanet.net.br/#/venda/cliente/'+id+'/sobre';

  let botao=document.getElementById('abrir-cliente-btn');

  if(!botao){
    botao=document.createElement('a');
    botao.id='abrir-cliente-btn';
    botao.target='_blank';
    botao.style.marginLeft='10px';
    botao.style.padding='4px 8px';
    botao.style.background='#00bfff';
    botao.style.color='#fff';
    botao.style.borderRadius='4px';
    botao.style.fontSize='12px';
    botao.style.textDecoration='none';
    botao.innerText='Abrir Cliente';
    el.appendChild(botao);
  }

  botao.href=url;
}

new MutationObserver(criarOuAtualizarBotao)
.observe(document.body,{childList:true,subtree:true});

criarOuAtualizarBotao();

})();
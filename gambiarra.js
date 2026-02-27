javascript:(function(){
if(window.__linkClienteAtivo)return;
window.__linkClienteAtivo=true;

function atualizar(){
  const el=document.querySelector('#interaction-header-participant-name');
  if(!el)return;

  const texto=el.textContent;

  const match=texto.match(/\[(\d+)\]/);
  if(!match)return;

  const id=match[1];
  const url='https://novorevan.brisanet.net.br/#/venda/cliente/'+id+'/sobre';

  // Remove links antigos
  const links=el.querySelectorAll('a[data-cliente-link]');
  links.forEach(a=>a.replaceWith(a.textContent));

  // Substitui apenas o ID
  el.innerHTML=el.innerHTML.replace(
    '['+id+']',
    '[<a data-cliente-link="1" href="'+url+'" target="_blank" style="color:#00bfff;font-weight:bold;">'+id+'</a>]'
  );
}

new MutationObserver(atualizar)
.observe(document.querySelector('#interaction-header-participant-name'),{
  childList:true,
  subtree:true,
  characterData:true
});

atualizar();
})();
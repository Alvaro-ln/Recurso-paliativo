(function() {
    const targetId = "interaction-header-participant-name";
    const buttonClass = "btn-abrir-cliente-custom";

    function injectButton() {
        const header = document.getElementById(targetId);
        if (!header) return;

        // Evita duplicados: verifica se o botão já existe dentro deste elemento
        if (header.querySelector(`.${buttonClass}`)) return;

        // Extrai o ID (o número dentro do último par de colchetes)
        const text = header.innerText;
        const matches = text.match(/\[(\d+)\]/g);
        
        if (matches && matches.length > 0) {
            // Pega o último par de colchetes, remove os [ ] e extrai o número
            const lastMatch = matches[matches.length - 1];
            const idCliente = lastMatch.replace(/[\[\]]/g, '');

            // Cria o botão
            const btn = document.createElement("button");
            btn.innerText = "Abrir Cliente";
            btn.className = buttonClass;
            
            // Estilização básica para o botão ficar visível e bonito
            btn.style.marginLeft = "15px";
            btn.style.padding = "5px 10px";
            btn.style.backgroundColor = "#007bff";
            btn.style.color = "white";
            btn.style.border = "none";
            btn.style.borderRadius = "4px";
            btn.style.cursor = "pointer";
            btn.style.fontSize = "14px";

            // Ação de abrir o link
            btn.onclick = (e) => {
                e.preventDefault();
                const url = `https://novorevan.brisanet.net.br/#/venda/cliente/${idCliente}/sobre`;
                window.open(url, '_blank');
            };

            // Insere o botão no H2
            header.appendChild(btn);
            console.log("Botão 'Abrir Cliente' injetado para o ID:", idCliente);
        }
    }

    // Configura o observador para monitorar mudanças no DOM (atualizações da página)
    const observer = new MutationObserver(() => {
        injectButton();
    });

    // Começa a observar o corpo da página para mudanças
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Executa uma vez ao carregar o script
    injectButton();
})();
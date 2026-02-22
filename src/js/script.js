btn = document.getElementById('comece-agora');

btn.addEventListener('click', abrirWhatsApp);

function abrirWhatsApp() {
    const wpp = "5512981343198"
    const mensagem = "Olá, vim através do site e estou interessado em agendar uma aula experimental!";
    const url = `https://wa.me/${wpp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}


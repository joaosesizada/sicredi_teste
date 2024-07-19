function redirecionar (url) {
    window.location.href = url
}

function scrollToSection() {
    window.scrollBy({
        top: window.innerHeight - (window.innerHeight * 25 /100) ,
        behavior: 'smooth' // Faz a rolagem ser suave
    });
}

function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error(`Elemento com ID '${id}' não encontrado.`);
    }
}
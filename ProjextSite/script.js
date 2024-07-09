// JavaScript para acionar o modal ao clicar no ícone do YouTube
document.getElementById('youtube-icon').addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    $('#exampleModal').modal('show');
});

// Smooth Scrolling  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

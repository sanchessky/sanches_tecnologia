/**
 * script.js - Tecnologia do Sanches
 * Funcionalidades interativas, animações ao rolar a página e utilitários.
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Atualizar o ano do Copyright automaticamente
    const copyrightYearSpan = document.getElementById("copyrightYear");
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = new Date().getFullYear();
    }
    // 2. Comportamento do Botão de Voltar ao Topo
    const topoBtn = document.getElementById("topo");
    
    const toggleBackToTopButton = () => {
        if (window.scrollY > 300) {
            topoBtn.classList.add("visible");
        } else {
            topoBtn.classList.remove("visible");
        }
    };
    window.addEventListener("scroll", toggleBackToTopButton);
    // 3. Fechar menu mobile automaticamente ao clicar em um link
    const menuCheckbox = document.getElementById("check");
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (menuCheckbox && menuCheckbox.checked) {
                menuCheckbox.checked = false;
            }
        });
    });
    // 4. Animação de revelação ao rolar a página (Scroll Reveal)
    // Criamos um efeito elegante para exibir os elementos à medida que aparecem na tela
    const revealElements = document.querySelectorAll(".highlight-card, .service-card, .about-content, .about-visual-box, .contact-info-panel, .contact-socials-panel");
    const revealElements = document.querySelectorAll(".highlight-card, .service-card, .about-content, .about-visual-box, .contact-info-panel, .contact-socials-panel, .review-card, .google-rating-badge");
    // Adiciona a classe inicial de animação via CSS dinâmico
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal-hidden {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    // Configura o Intersection Observer
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                // Para de observar o elemento uma vez que ele já foi revelado
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Elemento precisa estar 10% visível
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de entrar totalmente na tela
    });
    // Inicializa os elementos ocultos e começa a observar
    revealElements.forEach(element => {
        element.classList.add("reveal-hidden");
        revealObserver.observe(element);
    });
    // 5. Efeito de Header Ativo ao rolar a página
    const header = document.querySelector(".header-main");
    
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.style.padding = "0px";
            header.style.background = "rgba(7, 10, 19, 0.95)";
            header.style.boxShadow = "0 10px 30px -10px rgba(0, 0, 0, 0.5)";
        } else {
            header.style.padding = "";
            header.style.background = "rgba(7, 10, 19, 0.85)";
            header.style.boxShadow = "none";
        }
    };
    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll(); // Executa no carregamento inicial caso a página já comece com scroll
});

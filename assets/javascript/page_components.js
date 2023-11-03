let headerElement = document.getElementById("header") 

headerElement.innerHTML = (`
    <h2 class="header__title">Dev From Zer0</h2>
    <nav class="header__nav">
        <ul class="list">
            <li class="list__item"><a href="#">Início</a></li>
            <li class="list__item"><a href="#">Quem Somos</a></li>
            <li class="list__item"><a href="#">Equipe</a></li>
        </ul>
    </nav>
    <button><a href="#">Comprar</a></button>
`)

let footerElement = document.getElementById("footer")

footerElement.innerHTML = (`    
        <ul class="footer__list">
            <h4 class="footer__list__title">Nossas Redes</h4>
            <li class="footer__list__item"><a href="">Linkedin</a></li>
            <li class="footer__list__item"><a href="">Instagram</a></li>
        </ul>
        <ul class="footer__list">
            <h4 class="footer__list__title">Contato e FAQ</h4>
            <li class="footer__list__item"><a href="">Suporte</a></li>
            <li class="footer__list__item"><a href="">Vendas</a></li>
            <li class="footer__list__item"><a href="">FAQ</a></li>
        </ul>
        <div class="footer__side-section">
            <img src="" alt="" class="footer__side-section__logo">
        </div>
`)
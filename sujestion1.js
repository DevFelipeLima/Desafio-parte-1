// função para criar o novo item dropdown "Veículos" e realocar os itens "Novos" e "Seminovos".
function criarDropdownVeiculos() {
  // criando o elemento li para o novo item "Veículos".
  var veiculosItem = document.createElement("li");
  veiculosItem.className = "nav-item nav-simple__item";
  veiculosItem.style.setProperty("--animation-index", "1");

  // criando o link para "Veículos"
  var veiculosLink = document.createElement("a");
  veiculosLink.href = "#";
  veiculosLink.className = "nav-link nav-simple__link";
  veiculosLink.setAttribute("data-toggle", "dropdown");
  veiculosLink.setAttribute("aria-expanded", "false");
  veiculosLink.innerHTML =
    "<strong>Veículos</strong> <i class='icon icon-dropdown icon-arrow-d'></i>";

  // criando o submenu para "Veículos".
  var veiculosSubmenu = document.createElement("div");
  veiculosSubmenu.className = "nav-simple-sub card-collapse-deep dropdown-menu";

  // criando a lista dentro do submenu para os itens "Novos" e "Seminovos"
  var veiculosList = document.createElement("ul");
  veiculosList.className = "list list--border-bottom";

  // criando o item "Novos" e removê-lo da lista principal
  var novosItem = document.querySelector(
    ".nav--accordion-mobile .nav-item:nth-child(2)"
  );
  var novosItemCloned = novosItem.cloneNode(true);
  veiculosList.appendChild(novosItemCloned);
  novosItem.remove();

  // criando o item "Seminovos" e removê-lo da lista principal
  var seminovosItem = document.querySelector(
    ".nav--accordion-mobile .nav-item:nth-child(2)"
  );
  var seminovosItemCloned = seminovosItem.cloneNode(true);
  veiculosList.appendChild(seminovosItemCloned);
  seminovosItem.remove();

  // adicionando a lista ao submenu
  veiculosSubmenu.appendChild(veiculosList);

  // adicionando o submenu ao item "Veículos"
  veiculosItem.appendChild(veiculosLink);
  veiculosItem.appendChild(veiculosSubmenu);

  // adicionando evento de clique para alterar as classes e o atributo aria-expanded quando clicado no item "Veículos"
  veiculosLink.addEventListener("click", function () {
    veiculosItem.classList.toggle("show");
    veiculosSubmenu.classList.toggle("show");
    var isExpanded =
      veiculosLink.getAttribute("aria-expanded") === "true" || false;
    veiculosLink.setAttribute("aria-expanded", !isExpanded);
  });

  // obtendo todos os itens da lista de navegação, exceto o item "Veículos"
  var navItems = document.querySelectorAll(".nav--accordion-mobile .nav-item");

  // adicionando evento de click para fechar o menu quando clickado em outro item da lista
  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      veiculosItem.classList.remove("show");
      veiculosSubmenu.classList.remove("show");
      veiculosLink.setAttribute("aria-expanded", "false");
    });
  });

  // inserindo o item "Veículos" como primeiro filho da lista de navegação
  var navList = document.querySelector(".nav--accordion-mobile");
  var consorcioItem = document.querySelector(
    ".nav--accordion-mobile .nav-item:nth-child(2)"
  );
  navList.insertBefore(veiculosItem, consorcioItem);
}

criarDropdownVeiculos();

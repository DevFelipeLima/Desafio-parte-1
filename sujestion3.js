// selecionando todos os elementos "a" dentro da "ul" com a classe "list--header-phones"
const links = document.querySelectorAll("ul.list--header-phones a");

// looping para validar se o atributo data-open-modal existe ou não e mudar ele caso exista
links.forEach((link) => {
  if (link.hasAttribute("data-open-modal")) {
    link.setAttribute("data-open-modal", "false");
  }
});

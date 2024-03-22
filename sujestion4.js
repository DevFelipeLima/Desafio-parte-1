// copia do icone do wtsapp.
const originalWppIcon = document.querySelector(".icon-whatsapp");
originalWppIcon.style = "margin-right: 0; font-size: 2rem;";
const wppIcon = originalWppIcon.cloneNode(true);

// copia do botão de popup com a lista de numeros.
const originalButtonWpp = document.querySelectorAll(
  ".header__phones-button-toggler"
)[1];
const buttonWpp = originalButtonWpp.cloneNode(true);
buttonWpp.style = "display: flex; width: 55px; height: 60px;";
buttonWpp.textContent = "";
buttonWpp.append(wppIcon);

//copia da lista de numeros do popup.
const originalWppContactsInfo = document.querySelector("#wpp-content-0");
const wppContactsInfo = originalWppContactsInfo.cloneNode(true);
wppContactsInfo.style =
  "position: absolute; top: -100px; left: 80px; border-radius: 20px;";

//criação da div que irá ficar fixada com o botão.
const popupContainer = document.createElement("div");
popupContainer.style =
  "position: fixed; bottom: 30px; left: 30px; z-index: 9999;";
popupContainer.append(buttonWpp);
popupContainer.appendChild(wppContactsInfo);

//adicionando o eventlistener para quando clicar no popup ele abrir com a lista de numeros.
popupContainer.addEventListener("click", () => {
  wppContactsInfo.className += " show";
});

// enviando o popup para a pagina.
const pageContainer = document.querySelector(".page__container");
pageContainer.appendChild(popupContainer);

// função para adicionar o eventlistener que fecha o toggle caso clicar fora dele.
function fecharModalForaClick(event) {
  if (!popupContainer.contains(event.target)) {
    // Remove a classe 'show' do modal
    wppContactsInfo.classList.remove("show");
  }
}

document.addEventListener("click", fecharModalForaClick);

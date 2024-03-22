// função que cria um campo select.
function createSelectField(options) {
  const selectField = document.createElement("select");
  selectField.setAttribute("class", "form-control");
  selectField.setAttribute("name", "vehicle-type");

  // adicionando as opções ao select.
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option;
    selectField.appendChild(optionElement);
  });

  return selectField;
}

// função que cira um campo textarea.
function createTextareaField() {
  const textareaField = document.createElement("textarea");
  textareaField.setAttribute("class", "form-control");
  textareaField.setAttribute("name", "message");
  textareaField.setAttribute("placeholder", "Mensagem");
  return textareaField;
}

// achando o local onde queremos adicionar os campos.
const formBody = document.querySelector(".form-conversion__body");

// criando e adicionando os campos à DOM.
const selectOptions = ["SUV", "Sedan", "Hatch", "Pickup"];
const selectField = createSelectField(selectOptions);

// encontrando o campo de telefone.
const phoneField = formBody.querySelector("input[name='phone']");

// colocando o campo select após o campo de telefone.
phoneField.parentNode.insertBefore(selectField, phoneField.nextSibling);
selectField.style.marginTop = "10px";

// criando e adicionando o campo textarea à DOM.
const textareaField = createTextareaField();

// Encontrar o botão
const submitButton = formBody.querySelector("button");

// colocando o campo textarea antes do botão.
submitButton.parentNode.insertBefore(textareaField, submitButton);
textareaField.style.marginBottom = "10px";

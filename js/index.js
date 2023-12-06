const pageForm = document.getElementById("main-form");
pageForm.addEventListener("submit", function dataa(e) {
  e.preventDefault();

  const dateInput = document.getElementById("date");
  const inputValue = dateInput.value;

  const datiSalvati = document.createElement("div");
  const paragraph = document.createElement("p");
  paragraph.textContent = inputValue;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("taskCheckbox");

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      paragraph.style.textDecoration = "line-through";
    } else {
      paragraph.style.textDecoration = "none";
    }
  });

  datiSalvati.appendChild(paragraph);
  datiSalvati.appendChild(checkbox);

  const sectElementSaved = document.getElementById("elencoSalvato");
  sectElementSaved.appendChild(datiSalvati);

  dateInput.value = "";
});

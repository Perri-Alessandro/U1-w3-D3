// DEFINISCO COSA FARE AD AVVIO FORM
const pageForm = document.getElementById("main-form");
pageForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   evito che la pagina si aggiorni all'invio di dati
  console.log("I DATI CHE STO PER SALVARE SONO:", pageForm);

  const dateInput = document.getElementById("date");
  //   POTEVO INSERIRE .VALUE ALLA FINE DI OGNUNA DI QUESTE STRINGHE, SENZA NON METTERLO DOPO
  const practiceInput = document.getElementById("practice");
  const studyInput = document.getElementById("study");
  const sportInput = document.getElementById("sport");
  const animalsInput = document.getElementById("animals");
  // ho appena fatto questo per salvare i campi di input
  // adesso che sono salvati posso legegrli con proprietà VALUE in console
  console.log("CAMPO SALVATO:", dateInput.value);
  console.log("CAMPO SALVATO:", practiceInput.value);
  console.log("CAMPO SALVATO:", studyInput.value);
  console.log("CAMPO SALVATO:", sportInput.value);
  console.log("CAMPO SALVATO:", animalsInput.value);
  alert("DATI INVIATI");

  //   ORA CREO UN DIV VUOTO PER I DATI SALVATI
  const datiSalvati = document.createElement("div");
  //   ADESSO CI INSERISCO I DATI DEL FORM SALVATI
  datiSalvati.innerHTML = `
                          <p>${dateInput.value}</p>
                          <p>${practiceInput.value}</p>
                          <p>${studyInput.value}</p>
                          <p>${sportInput.value}</p>
                          <p>${animalsInput.value}</p>
                        `;
  // ORA APPENDO QUESTO DIV NELLA PAGINA
  const sectElementSaved = document.getElementById("elencoSalvato");
  sectElementSaved.appendChild(datiSalvati);
});

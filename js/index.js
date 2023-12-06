// DEFINISCO COSA FARE AD AVVIO FORM
const formDate = document.getElementById("main-form");
formDate.addEventListener("submit", function dataa(e) {
  e.preventDefault();
  //   evito che la pagina si aggiorni all'invio di dati
  console.log("I DATI CHE STO PER SALVARE SONO:", formDate);
  const dateInput = document.getElementById("date");
  //   POTEVO INSERIRE .VALUE ALLA FINE DI OGNUNA DI QUESTE STRINGHE, SENZA NON METTERLO DOPO

  // ho appena fatto questo per salvare i campi di input
  // adesso che sono salvati posso legegrli con proprietà VALUE in console
  console.log("CAMPO SALVATO:", dateInput.value);
  alert("DATI INVIATI");

  //   ORA CREO UN DIV VUOTO PER I DATI SALVATI (successivamente lo appendo in pagina per mostrarcelo)
  const datiSalvati = document.createElement("div");
  //   ADESSO CI INSERISCO I DATI DEL FORM SALVATI
  datiSalvati.innerHTML = `
                          <p>${dateInput.value}</p>
                        `;
  // ORA APPENDO QUESTO DIV NELLA PAGINA
  const sectElementSaved = document.getElementById("elencoSalvato");
  sectElementSaved.appendChild(datiSalvati);

  // ADESSSO PER SVUOTARE IL FORM
  dateInput.value = "";
  // MA IO POTREI USARE IL TASTO RESET PER SVUOTARE IL FORM
});

// SECONDO INPUT
const formPractice = document.getElementById("main-form");
formPractice.addEventListener("submit", function eserciziPratici(e) {
  e.preventDefault();
  console.log("I DATI CHE STO PER SALVARE SONO:", formPractice);
  const practiceInput = document.getElementById("practice");
  console.log("CAMPO SALVATO:", practiceInput.value);
  alert("DATI INVIATI");
  const datiSalvati = document.createElement("div");
  datiSalvati.innerHTML = `
                          <p>${practiceInput.value}</p>
                        `;
  const sectElementSaved = document.getElementById("elencoSalvato");
  sectElementSaved.appendChild(datiSalvati);
  practiceInput.value = "";
});

// TERZO INPUT
const formStudy = document.getElementById("main-form");
formStudy.addEventListener("submit", function studyy(e) {
  e.preventDefault();
  console.log("I DATI CHE STO PER SALVARE SONO:", formStudy);
  const studyInput = document.getElementById("study");
  console.log("CAMPO SALVATO:", studyInput.value);
  alert("DATI INVIATI");
  datiSalvati.innerHTML = `
  <p>${studyInput.value}</p>
`;
  const sectElementSaved = document.getElementById("elencoSalvato");
  sectElementSaved.appendChild(datiSalvati);
  studyInput.value = "";
});

// QUARTO INPUT
const formSport = document.getElementById("main-form");
formSport.addEventListener("submit", function sportt(e) {
  e.preventDefault();
  console.log("I DATI CHE STO PER SALVARE SONO:", formSport);
  const sportInput = document.getElementById("sport");
  console.log("CAMPO SALVATO:", sportInput.value);
  alert("DATI INVIATI");
  datiSalvati.innerHTML = `
                          <p>${sportInput.value}</p>
                        `;
  const sectElementSaved = document.getElementById("elencoSalvato");
  sectElementSaved.appendChild(datiSalvati);
  sportInput.value = "";
});

// QUINTO INPUT
const formAnimal = document.getElementById("main-form");
formAnimal.addEventListener("submit", function animall(e) {
  e.preventDefault();
  console.log("I DATI CHE STO PER SALVARE SONO:", formAnimal);
  const animalsInput = document.getElementById("animals");
  console.log("CAMPO SALVATO:", animalsInput.value);
  alert("DATI INVIATI");
  datiSalvati.innerHTML = `
                          <p>${animalsInput.value}</p>
`;
  const sectElementSaved = document.getElementById("elencoSalvato");
  sectElementSaved.appendChild(datiSalvati);
  animalsInput.value = "";
});

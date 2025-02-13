const georgianNouns = [
  "სახლი",
  "კარი",
  "ფანჯარა",
  "სახურავი",
  "კედელი",
  "იატაკი",
  "მაგიდა",
  "სკამი",
  "საწოლი",
  "წიგნი",
  "კალამი",
  "ფანქარი",
  "ქაღალდი",
  "ტელევიზორი",
  "კომპიუტერი",
  "ტელეფონი",
  "მანქანა",
  "ავტობუსი",
  "მატარებელი",
  "თვითმფრინავი",
  "ველოსიპედი",
  "ქუჩა",
  "მოედანი",
  "პარკი",
  "ხიდი",
  "მაღაზია",
  "რესტორანი",
  "თეატრი",
  "კინოთეატრი",
  "საავადმყოფო",
  "სკოლა",
  "უნივერსიტეტი",
  "ბანკი",
  "ფოსტა",
  "სასტუმრო",
  "ეკლესია",
  "მეჩეთი",
  "სინაგოგა",
  "მთა",
  "მდინარე",
  "ტბა",
  "ზღვა",
  "ოკეანე",
  "ტყე",
  "ველი",
  "ყვავილი",
  "ხე",
  "ბალახი",
  "ქვა",
  "მიწა",
  "ცა",
  "მზე",
  "მთვარე",
  "ვარსკვლავი",
  "ღრუბელი",
  "წვიმა",
  "თოვლი",
  "ქარი",
  "ცეცხლი",
  "წყალი",
  "საჭმელი",
  "სასმელი",
  "ტანსაცმელი",
  "ფეხსაცმელი",
  "ქუდი",
  "ხელთათმანი",
  "საათი",
  "გასაღები",
  "ფული",
  "დანა",
  "ჩანგალი",
  "კოვზი",
  "თეფში",
  "ჭიქა",
  "წიგნი",
  "გაზეთი",
  "ჟურნალი",
  "სურათი",
  "ფოტო",
  "სათამაშო",
  "თოჯინა",
  "ბურთი",
  "საწოლი",
  "სკამი",
  "მაგიდა",
  "კარადა",
  "სარკე",
  "საპონი",
  "კბილის ჯაგრისი",
  "კბილის პასტა",
  "პირსახოცი",
  "სავარცხელი",
  "მაკრატელი",
  "წებო",
  "ძაფი",
  "ნემსი",
  "ღილაკი",
  "ელვა",
  "ქამარი",
  "ჩანთა",
];

let playerNames = [];
let spy = "";
let spyForUse = "ჯაშუში";

function createNameInputs() {
  const numPlayers = parseInt(document.getElementById("player_count").value);

  const container = document.getElementById("name_inputs");
  container.innerHTML = "";

  for (let i = 0; i < numPlayers; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.id = `playerName${i + 1}`;
    input.placeholder = `მოთამაშე ${i + 1}-ის სახელი`;
    container.appendChild(input);
  }
}

function storePlayerNames() {
  const numPlayers = parseInt(document.getElementById("player_count").value);
  playerNames = [];

  for (let i = 0; i < numPlayers; i++) {
    const playerNameInput = document.getElementById(`playerName${i + 1}`);
    const playerName = playerNameInput.value;
    playerNames.push(playerName);
  }
  console.log(playerNames);
  selectSpy();
  console.log(spy);
}

function selectSpy() {
  if (playerNames.length > 0) {
    let spyIndex = Math.floor(Math.random() * playerNames.length);
    spy = playerNames[spyIndex];
  } else {
    alert("შეავსე მოთამაშეების სახელები");
  }
}

const cardContainer = document.getElementById("card_container");

theWord = georgianNouns[Math.floor(Math.random() * georgianNouns.length)];

function createCard() {
  for (let i = 0; i < playerNames.length; i++) {
    const card = document.createElement("div");
    cardContainer.appendChild(card);
    card.classList.add("card");
    if (playerNames[i] === spy) {
      let saxeli = document.createElement("h2");
      card.appendChild(saxeli);
      saxeli.classList.add("motamashis_saxeli");
      saxeli.innerHTML = `${playerNames[i]}`;
      let sityva = document.createElement("h1");
      sityva.innerHTML = `შენ ხარ: ${spyForUse}`;
      card.appendChild(sityva);
      sityva.classList.add("sityva");
    } else {
      let saxeli = document.createElement("h2");
      card.appendChild(saxeli);
      saxeli.classList.add("motamashis_saxeli");
      saxeli.innerHTML = `${playerNames[i]}`;
      let sityva = document.createElement("h1");
      sityva.innerHTML = `სიტყვა: ${theWord}`;
      card.appendChild(sityva);
      sityva.classList.add("sityva");
    }
  }
}

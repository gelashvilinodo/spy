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
  return playerNames;
}
const finalPlayerNames = storePlayerNames();
console.log(finalPlayerNames);

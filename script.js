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
}


//ESERCIZIO 1

const nameInput = document.getElementById("name");
const saveNameButton = document.getElementById("saveName");
const removeNameButton = document.getElementById("removeName");
const savedNameDiv = document.getElementById("savedName");

const savedName = localStorage.getItem("savedName");
if (savedName) {
  savedNameDiv.innerText = `Nome salvato: ${savedName}`;
}

saveNameButton.addEventListener("click", () => {
  const newName = nameInput.value;
  if (newName) {
    localStorage.setItem("savedName", newName);
    savedNameDiv.innerText = `Nuovo nome salvato: ${newName}`;
    nameInput.value = "";
  }
});

removeNameButton.addEventListener("click", () => {
  localStorage.removeItem("savedName");
  savedNameDiv.innerText = "";
});

//ESERCIZIO 2

const counterElement = document.getElementById("counter");

function updateCounter() {
  const startTime = sessionStorage.getItem("startTime");

  if (startTime !== null) {
    const currentTime = new Date().getTime();
    const elapsedSeconds = Math.floor((currentTime - parseInt(startTime)) / 1000);

    counterElement.innerText = elapsedSeconds;
  }
}

function startCounter() {
  const startTime = sessionStorage.getItem("startTime");

  if (startTime === null) {
    const currentTime = new Date().getTime();
    sessionStorage.setItem("startTime", currentTime);
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

startCounter();

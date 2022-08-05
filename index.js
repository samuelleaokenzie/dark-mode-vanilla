const button = document.querySelector("button");
const body = document.body;

const themeButtonText = ["Trocar Para: Light Mode", "Trocar Para: Dark Mode"];
const theme = "dark-mode";
let darkMode;

button.addEventListener("click", themeChange);

function themeChange() {
  darkMode = !darkMode;
  body.classList.toggle(theme);
  localStorage.setItem(theme, darkMode);
  themeChangeButtonText(button);
}

function themeChangeButtonText(ButtonElement) {
  darkMode
    ? (ButtonElement.innerText = themeButtonText[0])
    : (ButtonElement.innerText = themeButtonText[1]);
}

function themePreferenceAnalysis() {
  darkMode = JSON.parse(localStorage.getItem(theme));
  if (darkMode) {
    themeChangeButtonText(button);
    body.classList.add(theme);
  } else {
    themeChangeButtonText(button);
  }
}

themePreferenceAnalysis();

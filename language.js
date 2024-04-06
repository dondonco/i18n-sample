import { translations } from "./translation";

const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const selector = document.getElementById("language");

selector.addEventListener("change", (e) => {
  console.log(e.target.value);
  selectLanguage(e.target.value);
});

const selectLanguage = (language) => {
  home.textContent = translations[language]["home"];
  about.textContent = translations[language]["about"];
  contact.textContent = translations[language]["contact"];
};

console.log(home.textContent);
console.log(about.textContent);
console.log(contact.textContent);

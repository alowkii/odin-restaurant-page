import { clearContent } from "./index.js";

function displayHome() {
    clearContent();
    document.getElementById("home").classList.add("selected");

    const content = document.getElementById("content");
  
    const home = document.createElement("div");
    home.id = "home";
    home.textContent = "Welcome to our restaurant!";
  
    content.appendChild(home);
}

export { displayHome };
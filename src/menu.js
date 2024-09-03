import { clearContent } from "./index.js";

function displayMenu() {
    clearContent();
    document.getElementById("menu").classList.add("selected");

    const content = document.getElementById("content");
  
    const menu = document.createElement("div");
    menu.id = "menu-content";
    menu.textContent = "Menu";
  
    content.appendChild(menu);
}

export { displayMenu };
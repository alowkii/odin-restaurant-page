import { clearContent } from "./index.js";

function displayContact() {
    clearContent();
    document.getElementById("contact").classList.add("selected");

    const content = document.getElementById("content");
  
    const contact = document.createElement("div");
    contact.id = "contact-content";
    contact.textContent = "Contact";
  
    content.appendChild(contact);
}

export { displayContact };
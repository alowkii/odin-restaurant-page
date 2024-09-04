import { clearContent } from "./index.js";

function displayAbout() {
    clearContent();
    document.getElementById("about").classList.add("selected");

    const content = document.getElementById("content");
  
    const about = document.createElement("div");
    about.id = "about-content";

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About Us";
    about.appendChild(aboutTitle);

    const paragraphs = [
        "Welcome to Sour&Spicy, where tradition meets flavor! As a family-owned restaurant, we take pride in serving authentic Chinese cuisine that reflects the rich culinary heritage of China. Our journey began with a passion for food and a desire to share the vibrant and diverse flavors of Chinese cooking with our community.",
        "At Sour&Spicy, every dish is a labor of love, crafted with the freshest ingredients and time-honored recipes passed down through generations. From the sizzling woks to the aromatic spices, we ensure that each meal is prepared to perfection, delivering an unforgettable dining experience. Whether you're craving the bold and spicy notes of Sichuan cuisine or the delicate flavors of Cantonese dishes, our menu offers something for everyone.",
        "We believe that great food brings people together, and at Sour&Spicy, we are dedicated to creating a warm and welcoming atmosphere where you can enjoy a meal with family, friends, or even solo. Come and experience the true taste of China in every bite.",
        "Join us at Sour&Spicy, where our food is not just a meal, but a celebration of flavor and culture. We look forward to serving you!"
    ];
    
    paragraphs.forEach(text => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        paragraph.innerHTML = '<br>' + paragraph.innerHTML;
        about.appendChild(paragraph);
    });

    content.appendChild(about);
}

export { displayAbout };
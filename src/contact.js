import { clearContent } from "./index.js";

function displayContact() {
    clearContent();
    document.getElementById("contact").classList.add("selected");

    const content = document.getElementById("content");
  
    const contact = document.createElement("div");
    contact.id = "contact-content";
    content.appendChild(contact);

    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    contact.appendChild(title);

    const address = document.createElement("div");
    address.innerHTML = `
        <h3>Our Address</h3>
        <p>Sour&Spicy Chinese Restaurant</p>
        <p>123 Flavor Street, Spice City, SC 45678</p>
        <p>Country: USA</p>
    `;
    contact.appendChild(address);

    const phone = document.createElement("div");
    phone.innerHTML = `
        <h3>Phone</h3>
        <p>Reservations: (123) 456-7890</p>
        <p>Takeout Orders: (123) 456-7891</p>
    `;
    contact.appendChild(phone);

    const email = document.createElement("div");
    email.innerHTML = `
        <h3>Email</h3>
        <p>General Inquiries: <a href="mailto:info@sourandspicy.com">info@sourandspicy.com</a></p>
        <p>Careers: <a href="mailto:careers@sourandspicy.com">careers@sourandspicy.com</a></p>
    `;
    contact.appendChild(email);

    const hours = document.createElement("div");
    hours.innerHTML = `
        <h3>Hours of Operation</h3>
        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
        <p>Saturday: 12:00 PM - 11:00 PM</p>
        <p>Sunday: 12:00 PM - 9:00 PM</p>
    `;
    contact.appendChild(hours);

    const map = document.createElement("div");
    map.id = "map";
    map.innerHTML = `
        <h3>Find Us Here</h3>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094106!2d144.95565121584446!3d-37.81732797975127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d2e16ff5%3A0xfb102e2e0c4f1a40!2sMelbourne!5e0!3m2!1sen!2sau!4v1634714130179!5m2!1sen!2sau"
            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    `;
    contact.appendChild(map);
}

export { displayContact };
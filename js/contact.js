const emailUser = "davidrope" + "97";
const emailDomain = "gmail" + "." + "com";
const emailFull = emailUser + "@" + emailDomain;

const emailLink = document.createElement("a");
emailLink.href = "mail" + "to:" + emailFull;
emailLink.textContent = emailFull;

document.getElementById("contact-email").appendChild(emailLink);

// WHATSAPP OBFUSCATION
const waCountry = "506";
const waNumber = "724" + "15" + "989";
const waFull = waCountry + waNumber;

const waLink = document.createElement("a");
waLink.href = "https://" + "wa.me/" + waFull;
waLink.textContent = "WhatsApp";
waLink.target = "_blank";

document.getElementById("contact-whatsapp").appendChild(waLink);
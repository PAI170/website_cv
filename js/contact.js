document.addEventListener("DOMContentLoaded", function () {

  // --- EMAIL BUTTON ---
  const emailUser = "davidrope" + "97";
  const emailDomain = "gmail" + "." + "com";
  const emailFull = emailUser + "@" + emailDomain;

  const emailLink = document.createElement("a");
  emailLink.href = "mail" + "to:" + emailFull;
  emailLink.textContent = "Email me";
  emailLink.className = "contact-btn contact-btn--email";

  document.getElementById("contact-email").appendChild(emailLink);

  // --- WHATSAPP BUTTON ---
  const waCountry = "506";
  const waNumber = "724" + "15" + "989";
  const waFull = waCountry + waNumber;

  const waLink = document.createElement("a");
  waLink.href = "https://" + "wa.me/" + waFull;
  waLink.textContent = "Text me";
  waLink.target = "_blank";
  waLink.className = "contact-btn contact-btn--whatsapp";

  document.getElementById("contact-whatsapp").appendChild(waLink);

});
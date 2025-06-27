const params = new URLSearchParams(window.location.search);
const name = params.get("to") || "MEGHA";

const text = `This is for you, ${name} 💌`;
let index = 0;
const typingElement = document.getElementById("typing-text");

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    document.querySelector(".message").classList.remove("hidden");
  }
}

window.onload = typeWriter;
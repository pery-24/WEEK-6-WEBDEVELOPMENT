// 🎨 Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Counter Game
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  document.getElementById("counterValue").textContent = counter;
});

// ❓ FAQ Toggle
document.querySelector(".faq-question").addEventListener("click", () => {
  const answer = document.querySelector(".faq-answer");
  answer.style.display = (answer.style.display === "block") ? "none" : "block";
});

// 📋 Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from refreshing page
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Regex for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "") {
    message.textContent = "⚠️ Name cannot be empty";
    message.style.color = "red";
  } else if (!email.match(emailPattern)) {
    message.textContent = "⚠️ Enter a valid email";
    message.style.color = "red";
  } else if (password.length < 6) {
    message.textContent = "⚠️ Password must be at least 6 characters";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
  }
});

const themeBtn = document.getElementById("themeBtn");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const emailText = document.getElementById("emailText");
const toast = document.getElementById("toast");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Theme toggle + persist
function setTheme(mode) {
  document.body.classList.toggle("light", mode === "light");
  localStorage.setItem("theme", mode);
  themeBtn.textContent = mode === "light" ? "Dark" : "Light";
}

const saved = localStorage.getItem("theme") || "dark";
setTheme(saved);

themeBtn.addEventListener("click", () => {
  const next = document.body.classList.contains("light") ? "dark" : "light";
  setTheme(next);
});

// Copy email + tiny feedback
copyEmailBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailText.textContent.trim());
    toast.textContent = "Copied!";
    setTimeout(() => (toast.textContent = ""), 1200);
  } catch {
    toast.textContent = "Couldn’t copy — select it manually.";
  }
});

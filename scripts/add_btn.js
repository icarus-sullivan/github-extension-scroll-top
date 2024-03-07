var btn = document.createElement("button");
btn.textContent = "Scroll Up";
btn.style = `position: fixed; right: 32px; bottom: 12px;`;
btn.classList = `Button--primary Button--small Button`;
btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
document.body.appendChild(btn);

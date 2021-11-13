let acc = document.querySelectorAll(".accordion");

acc.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.className = "accordion active";
    let panel = e.target.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

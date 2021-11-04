// add items variables
const inputText = document.querySelector(".itemtext");
const addItem = document.querySelector(".additem");
const output = document.querySelector(".output");
const error = document.querySelector(".error");

// clear items variables
const clearItems = document.querySelector(".clear");
const confirmContainer = document.querySelector(".confirm-clear");
const confirmClear = document.querySelector(".confirm");
const confirmCancel = document.querySelector(".cancel");
const clearError = document.querySelector(".clear-error");

// adding items
addItem.addEventListener("click", () => {
  if (inputText.value === "" || null) {
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
  } else {
    newItem = document.createElement("p");
    newItem.appendChild(document.createTextNode(inputText.value));
    output.appendChild(newItem);
    inputText.value = "";
  }
});

// clearing items
clearItems.addEventListener("click", () => {
  if (output.innerHTML === "" || null) {
    clearError.style.display = "block";
    setTimeout(() => {
      clearError.style.display = "none";
    }, 2000);
  } else {
    clearItems.style.display = "none";
    confirmContainer.style.display = "block";
  }
});
confirmClear.addEventListener("click", () => {
  output.innerHTML = "";
  clearItems.style.display = "block";
  confirmContainer.style.display = "none";
});
confirmCancel.addEventListener("click", () => {
  clearItems.style.display = "block";
  confirmContainer.style.display = "none";
});

const modalOverlay = document.querySelector(".modal-overlay");
const loginBtn = document.querySelector(".btn");
const loginContainer = document.querySelector(".login-container");
const cancelModal = document.querySelector(".modal-cancel-btn");

loginBtn.addEventListener("click", () => {
  modalOverlay.className = "modal-overlay active";
  loginContainer.style.display = "block";
});

cancelModal.addEventListener("click", () => {
  modalOverlay.className = "modal-overlay";
  loginContainer.style.display = "none";
});

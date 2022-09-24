const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closedModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closedModal);

overlay.addEventListener("click", closedModal);

//listening to all event on the website i.e keystrokes
document.addEventListener("keydown", function (eVentHappening) {
  console.log(eVentHappening.key);

  if (eVentHappening.key === "Escape") {
    let eventTrue = modal.classList.contains("hidden");
    if (!eventTrue) {
      closedModal();
    }
  }
});

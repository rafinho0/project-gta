const button = document.querySelector(".btn-platforms");
const elementsPlatforms = document.querySelector(".btn-platforms .platforms");

button.addEventListener("click", () => {
    elementsPlatforms.classList.toggle("active");
});

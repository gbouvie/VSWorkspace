const input = document.querySelector(".pwd input");
const eye = document.querySelector(".pwd .fa-eye-slash");
const lock = document.querySelector(".pwd .fa-lock");
const overlay = document.querySelector(".pwd .overlay");

eye.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";

        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");

        setTimeout(() => {
            lock.classList.add("colorBlack");
            lock.classList.remove("colorWhite");
        }, 500);
    } else {
        input.type = "password";

        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

        lock.classList.add("colorWhite");
        lock.classList.remove("colorBlack");
    }

    overlay.classList.toggle("overlay-cover");
});
const closeBtn = document.getElementById("close-btn");
const aside = document.querySelector("aside");
const openMenu = document.querySelector(".menu");

closeBtn.addEventListener("click", function () {
  aside.classList.remove("show");
  aside.classList.add("hide");
});

openMenu.addEventListener("click", function () {
  aside.classList.remove("hide");
  aside.classList.add("show");
});

const chooseSection = document.querySelector(".choose-us");
const cCards = document.querySelectorAll(".c-cards");

const newObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("c-show");
      } else entry.target.classList.remove("c-show");
    });
  },
  {
    threshold: 0.4,
    rootMargin: "30px",
  }
);

newObserver.observe(chooseSection);

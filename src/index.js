import "./stylesheet.css";
import scrollTo from "./test";

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startAnimationWhenVisible() {
  const picture = document.querySelector(".my-photo");
  const text = document.querySelector(".about_me");

  if (isElementInViewport(text)) {
    picture.style.animationPlayState = "running";
    setTimeout(function () {
      text.style.animationPlayState = "running";
    }, 600);
  }
}

function scrollOnLoad() {
  const hash = window.location.hash;

  if (hash) {
    const targetId = hash.substring(1);

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }
}

window.addEventListener("scroll", startAnimationWhenVisible);
window.addEventListener("load", scrollOnLoad);

scrollTo();

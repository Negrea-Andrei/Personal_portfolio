
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


function startAnimationWhenVisible() {
  const picture = document.querySelector('.my-photo');
  const text = document.querySelector('.about_me')

  if (isElementInViewport(picture)) {
    picture.style.animationPlayState = 'running';
    text.style.animationPlayState = 'running'      
  }
}

export default startAnimationWhenVisible
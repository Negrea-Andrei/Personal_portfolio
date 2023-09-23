function scrollTo() {

  const links = document.querySelectorAll('a[href^="#"]');


  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();


      const targetId = this.getAttribute('href').substring(1);


      const targetSection = document.getElementById(targetId);

      if (targetSection) {

        window.scrollTo({
          top: targetSection.offsetTop
        });
      }
    });
  });
}

export default {scrollTo}
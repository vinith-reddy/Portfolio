document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.querySelector('a[href="#about"]');
    const contactLink = document.querySelector('a[href="#contact"]');
    const aboutSection = document.getElementById('about');
    const footerSection = document.getElementById('contact');
  
    aboutLink.addEventListener('click', function (event) {
      event.preventDefault();
      aboutSection.classList.toggle('highlight');
      footerSection.classList.remove('highlight');
    });
  
    contactLink.addEventListener('click', function (event) {
      event.preventDefault();
      aboutSection.classList.remove('highlight');
      footerSection.classList.add('highlight');
      footerSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

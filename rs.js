document.addEventListener('DOMContentLoaded', function () {
  const profileLink = document.querySelector('a[href="#profile"]');
  const contactLink = document.querySelector('a[href="#contact"]');
  const profileSection = document.getElementById('profile');
  const contactSection = document.getElementById('contact');

  profileLink.addEventListener('click', function (event) {
    event.preventDefault();
    profileSection.scrollIntoView({ behavior: 'smooth' });
  });

  contactLink.addEventListener('click', function (event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });

  window.showSection = function (sectionId) {
    const sections = document.querySelectorAll('.profile-section');
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  };
});

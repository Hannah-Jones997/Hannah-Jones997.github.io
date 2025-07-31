document.addEventListener('DOMContentLoaded', function () {
  const fadeInsVideo = document.querySelectorAll('.video');
  const fadeInsResource = document.querySelectorAll('#resource');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  fadeInsVideo.forEach(el => observer.observe(el));
  fadeInsResource.forEach(el => observer.observe(el));
});
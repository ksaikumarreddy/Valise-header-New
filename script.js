  const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const closeIcon = document.getElementById('closeIcon');
    const scrollToTopBtn = document.querySelector(".scroll-to-top");

    hamburger.addEventListener('click', () => {
      navbar.classList.add('open');
      document.body.classList.add('nav-open');
    });

    closeIcon.addEventListener('click', () => {
      navbar.classList.remove('open');
      document.body.classList.remove('nav-open');
    });

    document.querySelectorAll('.dropdown > a').forEach(dropLink => {
      dropLink.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = this.parentElement;
        const isOpen = parent.classList.contains('open');
        document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
        if (!isOpen) {
          parent.classList.add('open');
        }
      });
    });

    window.addEventListener('click', function (e) {
      if (!e.target.closest('.dropdown') && !e.target.closest('#hamburger')) {
        document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
      }
    });

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });

document.addEventListener('DOMContentLoaded',()=>{
  // Set current year in footer
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  // Mobile nav toggle
  const toggle=document.getElementById('navToggle');
  const list=document.getElementById('navList');
  if(toggle && list){
    toggle.addEventListener('click',()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      list.classList.toggle('show');
    });
    
    // Close nav when clicking on a link
    const links = list.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        list.classList.remove('show');
      });
    });
  }

  // Improve keyboard focus for skip link
  const skip=document.querySelector('.skip-link');
  if(skip){
    skip.addEventListener('click',()=>{document.getElementById('main')?.focus();});
  }
  
  // Smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});

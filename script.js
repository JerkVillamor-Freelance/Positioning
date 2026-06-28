// THE VISUAL ATELIER — interaction layer
// Two jobs: (1) the reveal-photo "develops" into focus once scrolled to,
// (2) generic sections fade/rise into view. Both respect reduced-motion.

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- 1. The reveal photo + name "develop" together ----
  const revealPhoto = document.querySelector('.reveal-photo');
  const revealText = document.querySelector('.reveal-text');

  if (revealPhoto && revealText) {
    if (reduceMotion) {
      revealPhoto.classList.add('in-focus');
      revealText.classList.add('in-focus');
    } else {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            revealPhoto.classList.add('in-focus');
            revealText.classList.add('in-focus');
            revealObserver.disconnect();
          }
        });
      }, { threshold: 0.35 });
      revealObserver.observe(revealPhoto);
    }
  }

  // ---- 2. Generic scroll-reveal for content blocks ----
  const targets = document.querySelectorAll(
    '.intro-inner, .skills-list li, .bring-text, .bring-grid, ' +
    '.process-pillars, .process-heading, .process-step, .tools-strip, .commercial-note, ' +
    '.pillar-card, .editing-photo, .tag-list, ' +
    '.manifesto-intro, .manifesto-photo, .manifesto-statement, .manifesto-body, .manifesto-list, .manifesto-close, ' +
    '.category-group, .cta-frame, .cta-question, .cta-prompt, .cta-contacts, .cta-button'
  );

  targets.forEach(el => el.classList.add('reveal-on-scroll'));

  if (reduceMotion) {
    targets.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // tiny stagger for sibling items (skills list, pillar cards)
          const delay = Math.min(i * 40, 200);
          setTimeout(() => entry.target.classList.add('is-visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    targets.forEach(el => observer.observe(el));
  }
});

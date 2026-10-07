(function () {
  'use strict';

  var menu = document.getElementById('mobile-menu');
  var openBtn = document.getElementById('menu-open-btn');
  var closeBtn = document.getElementById('menu-close-btn');

  if (!menu || !openBtn || !closeBtn) return;

  function openMenu() {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    openBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
    openBtn.setAttribute('aria-expanded', 'false');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  // Any link or button inside the mobile menu (nav links, the WhatsApp CTA)
  // closes the overlay once tapped, so returning to the page never leaves
  // it stuck open underneath.
  var closers = menu.querySelectorAll('.mobile-menu-link');
  for (var i = 0; i < closers.length; i++) {
    closers[i].addEventListener('click', closeMenu);
  }

  // Esc closes the menu too, for anyone on a mobile browser with a keyboard
  // (foldables, Bluetooth keyboards) or testing on desktop.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });
})();

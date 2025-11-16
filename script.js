// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Accordion
document.querySelectorAll('.accordion__toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    const isOpen = toggle.classList.contains('active');

    // Close all
    document.querySelectorAll('.accordion__toggle').forEach(t => {
      t.classList.remove('active');
      t.nextElementSibling.style.maxHeight = null;
    });

    // Open clicked
    if (!isOpen) {
      toggle.classList.add('active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

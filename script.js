document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const mobileMenu = document.querySelector(".mobile-menu-wrapper");
  const overlay = document.querySelector(".overlay");

  const openMenu = () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  };

  menuIcon.addEventListener("click", openMenu);
  closeIcon.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
});

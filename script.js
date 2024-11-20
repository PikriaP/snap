document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    const featuresButton = document.getElementById("features-button");
    const featuresMenu = document.getElementById("features-menu");
    const companyButton = document.getElementById("company-button");
    const companyMenu = document.getElementById("company-menu");
  
    featuresButton.addEventListener("click", () => {
      featuresMenu.classList.toggle("active");
    });
  
    companyButton.addEventListener("click", () => {
      companyMenu.classList.toggle("active");
    });
  });

  document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  
  
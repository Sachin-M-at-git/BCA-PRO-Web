document.querySelector(".nav-btn").addEventListener("click", function (e) {
  document.querySelectorAll(".nav .nav-tab:not(.logo)").forEach((tab) => {
    tab.classList.toggle("hidden");
  });
});

document.querySelectorAll(".Dbtn a").forEach(function (link) {
  // Check if href attribute is empty
  if (link.getAttribute("href") === "") {
    // If empty, remove target attribute
    link.removeAttribute("target");
  }
});

const year = document.querySelector("#year");
const heroVideo = document.querySelector(".hero-video");
const publicationFilters = document.querySelectorAll("[data-filter]");
const publicationItems = document.querySelectorAll(".publication-item");
const publicationYears = document.querySelectorAll(".year-group");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (heroVideo) {
  heroVideo.playbackRate = 0.5;
}

if (publicationFilters.length && publicationItems.length) {
  publicationFilters.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedKeyword = button.dataset.filter;

      publicationFilters.forEach((filterButton) => {
        filterButton.classList.toggle("active", filterButton === button);
      });

      publicationItems.forEach((item) => {
        const keywords = (item.dataset.keywords || "").split(";");
        const shouldShow = selectedKeyword === "all" || keywords.includes(selectedKeyword);
        item.classList.toggle("is-hidden", !shouldShow);
      });

      publicationYears.forEach((group) => {
        const visibleItems = group.querySelectorAll(".publication-item:not(.is-hidden)");
        group.classList.toggle("is-hidden", visibleItems.length === 0);
      });
    });
  });
}

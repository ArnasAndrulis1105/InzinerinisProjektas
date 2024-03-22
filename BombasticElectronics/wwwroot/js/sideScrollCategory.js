let scrollContainer = document.querySelector('.category-grid');
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("fwdBtn");

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += 256;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 256;
});

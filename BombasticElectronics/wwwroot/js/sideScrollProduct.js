let scrollContainer1 = document.querySelector('.product-grid');
let backBtn1 = document.getElementById("backBtn1");
let nextBtn1 = document.getElementById("fwdBtn1");

nextBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = 'smooth';
    scrollContainer1.scrollLeft += 256;
});

backBtn1.addEventListener("click", () => {
    scrollContainer1.style.scrollBehavior = 'smooth';
    scrollContainer1.scrollLeft -= 256;
});

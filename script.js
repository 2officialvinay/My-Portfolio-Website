const projectbtn = document.querySelector("#project-btn");
const resumebtn = document.querySelector("#resume-btn");
const scrollTopBtn = document.querySelector("#scrollTopBtn");

projectbtn.addEventListener("click", () => {
    window.location.href = "#projects";
});

resumebtn.addEventListener("click", () => {
    resumebtn.innerHTML = "Downloading...";

    setTimeout(() => {
        resumebtn.innerHTML = "Download Resume";

        window.open("Resume.pdf","_blank");
    }, 2000);

});

window.addEventListener("scroll", () => {

    if(window.scrollY > 250){
        scrollTopBtn.style.display = "flex";
    }
    else{
        scrollTopBtn.style.display = "none";
    }

});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
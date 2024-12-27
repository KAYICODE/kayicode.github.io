document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        setInterval(()=>{
        if (window.scrollY > 50) {
            navbar.classList.add("bg-primary", "text-white", "shadow-md", "backdrop-blur-md");
        } else {
            navbar.classList.remove("bg-primary", "text-white", "shadow-md", "backdrop-blur-md");
        }
    },3000)
    });
});
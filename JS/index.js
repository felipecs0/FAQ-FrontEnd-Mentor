document.querySelectorAll(".accordion_item").forEach((item) =>{
    const button = item.querySelector("button");
    button.addEventListener("click", ()=> {
        item.classList.toggle("--active");
    });
});
let share_button = document.querySelector(".share");
let desk = document.querySelector(".share_link_desktop");
let mob = document.querySelector(".share_link");

share_button.addEventListener("click", (e) => {
    if (innerWidth < 768) {
        mob.classList.toggle("hidden_mobile");
    }
    else {
        desk.classList.toggle("hidden_desktop");
    }
});

window.addEventListener("resize", (e) => {
    mob.classList.add("hidden_mobile");
    desk.classList.add("hidden_desktop");
});

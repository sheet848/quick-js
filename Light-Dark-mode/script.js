const changeThemeBtn = document.querySelector(".change-theme-btn");
const body = document.querySelector("body");

changeThemeBtn.addEventListener('click', () => {
    console.log(body.getAttribute("dark-theme"));
    
    if(body.getAttribute("data-theme") === "dark") {
        body.setAttribute("data-theme", "blue");
    } else {
        body.setAttribute("data-theme", "dark");
    }

    if(changeThemeBtn.getAttribute("data-theme") === "dark") {
        changeThemeBtn.setAttribute("data-theme","blue");
    } else {
        changeThemeBtn.setAttribute("data-theme", "dark");
    }
});

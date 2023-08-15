let $ = document
let navbar = $.querySelector(".navbar")
let subMenuToggle = $.querySelector(".main-li.dropdown-toggle .main-a")
let subMenu = $.querySelector(".sub-menu")
let themeToggle = $.querySelector(".right .content .theme-toggle i")
let logo = $.querySelector(".logo .logo-img")


function changeNavbarStyle() {
    if($.documentElement.scrollTop > 10) {
        navbar.classList.add("active")
    } else {
        navbar.classList.remove("active")
    }
}

function openSubMenu(event) {
    event.target.parentElement.children[1].classList.add("active")
}

function closeSubMenu(event) {
    event.target.children[1].classList.remove("active")
}

function changeTheme(event) {
    if(localStorage.getItem("theme") == "Light") {
        localStorage.setItem("theme" , "Dark")
        setThemeDark()
    } else {
        localStorage.setItem("theme" , "Light")
        setThemeLight()
    }
}

function getTheme() {
    if(localStorage.getItem("theme")) {
        if(localStorage.getItem("theme") == "Dark") {
            setThemeDark()
        } else {
            setThemeLight()
        }
    } else {
        localStorage.setItem("theme" , "Light")
        getTheme()
    }
}

function setThemeLight() {
    themeToggle.className = "fi fi-rr-brightness"
    $.documentElement.style.setProperty("--secondery-color" , "#ffffff")
    themeToggle.style.
    logo.src = "./Images/logo-light.svg"
}

function setThemeDark() {
    themeToggle.className = "fi fi-rr-moon"
    $.documentElement.style.setProperty("--secondery-color" , "#181c31")
    logo.src = "./Images/logo-dark.svg"
}

themeToggle.addEventListener("click" , changeTheme)
subMenuToggle.addEventListener("mouseenter" , openSubMenu)
subMenuToggle.parentElement.addEventListener("mouseleave" , closeSubMenu)
$.addEventListener("scroll" , changeNavbarStyle)
changeNavbarStyle()
getTheme()
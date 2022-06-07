const burgerBtn = document.querySelector(".burger-btn")
const sitenavClose = document.querySelector(".sitenav-left__close")
const sitenavLeft = document.querySelector(".sitenav-left")


burgerBtn.addEventListener("click", function() {
    sitenavLeft.classList.add("sitenav-left__add")
    sitenavLeft.classList.remove("sitenav-left__remove")
})

sitenavClose.addEventListener("click", function() {
    sitenavLeft.classList.remove("sitenav-left__add")
    sitenavLeft.classList.add("sitenav-left__remove")
})
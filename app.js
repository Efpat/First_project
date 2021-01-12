let prevBtn = document.querySelector("#prev")
let nextBtn = document.querySelector("#next")
let gallery = document.querySelector("#gallery")
let index = 0
window.onload = () => {
    gallery.src = imgArr[index]
    checkBtnStatus()
}

let imgArr = [
    "https://photocentra.ru/images/main74/742318_main.jpg",
    "https://proprikol.ru/wp-content/uploads/2019/10/kroliki-krasivye-kartinki-27.jpg",
    "https://coverfiles.alphacoders.com/629/62933.jpg"
]


nextBtn.addEventListener("click", () => {
    gallery.src = imgArr[index++]
    checkBtnStatus()



})
prevBtn.addEventListener("click", () => {

    gallery.src = imgArr[index--]
    checkBtnStatus()
})


function checkBtnStatus() {
    prevBtn.disabled = (index === 0)
    nextBtn.disabled = (index === imgArr.length - 1)

}




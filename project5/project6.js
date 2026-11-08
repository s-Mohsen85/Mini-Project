let field = document.querySelector("fieldset")
field.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        e.target.parentElement.remove()
        check()
    }
})

function check() {
    if (field.children.length === 3) {
        document.querySelector(".empty").style.display = "block"
    }
    else
        document.querySelector(".empty").style.display = "none"
}

document.querySelector(".add").addEventListener("click", () => {
    let old = document.querySelector(".hidden-list")
    let work = old.cloneNode(true)
    work.className = "list"
    let input = document.querySelector(".input")
    if (input.value.trim() === "") {
        return;
    }
    work.querySelector("label").innerText = input.value
    field.appendChild(work)
    input.value = ""
    check()
})
let search = document.querySelector(".search")
search.addEventListener("input", (e) => {
    let text = document.querySelectorAll(".list label")
    text.forEach((element) => {
        if (element.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            element.parentElement.style.display = "";
        }
        else {
            element.parentElement.style.display = "none"
        }
    });

})
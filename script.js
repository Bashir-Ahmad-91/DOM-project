const body = document.getElementById ('body')
const button = document.querySelectorAll ('li')

button.forEach(function(velue) {
    velue.addEventListener("click", function() {
        body.className = "";
        let buttonclass = this.classList.value
        body.classList.add (buttonclass)
    })
})

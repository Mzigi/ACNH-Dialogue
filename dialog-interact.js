let dialog = document.querySelector(".dialog")
let nextButton = document.getElementById("next-button")

function setDialog(jsontable) {
    document.querySelector(".name").innerHTML = jsontable.name["name-USen"]
    document.documentElement.style.setProperty("--dialog-name",jsontable["bubble-color"])
    document.documentElement.style.setProperty("--dialog-name-inside",jsontable["text-color"])
    document.querySelector(".content").innerHTML = ""

    setTimeout(function() {
        let totalTime = 0
        let fullMessage = jsontable.saying
        for (let i = 0; i < fullMessage.length; i++) {
            setTimeout(function() {
                document.querySelector(".content").innerHTML = fullMessage.substring(0,i)
            },totalTime)
            console.log(fullMessage.substring(i,i + 1))
            if (fullMessage.substring(i - 1,i) == "." || fullMessage.substring(i - 1,i) == "?" || fullMessage.substring(i - 1,i) == ",") {
                totalTime += 400
            } else {
                totalTime += 25
            }
        }
        setTimeout(function() {
            nextButton.classList.remove("inactive")
        },totalTime)
    },320)
}

setDialog(villagers[villagers.length - 1])

nextButton.addEventListener("mousedown", function(e) {
    if (e.button == 0 && !dialog.classList.contains("inactive") && !nextButton.classList.contains("inactive")) {
        let randomMessageId = Math.floor(Math.random() * villagers.length)
        dialog.classList.add("inactive")
        nextButton.classList.add("inactive")
        setTimeout(function() {
            setDialog(villagers[randomMessageId])
            dialog.classList.remove("inactive")
        },300)
    }
})
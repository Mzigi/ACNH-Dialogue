let messages = [
    {
        "name":"Tangy", 
        "namecolor": "hsl(40, 100%, 50%)", 
        "nameisdark": true,
        "content": 'Did you just.. Give me an <div class="green shake">ORANGE?</div>'
    },
    {
        "name":"Rosie", 
        "namecolor": "hotpink", 
        "nameisdark": false,
        "content": 'The most popular flower in the world is the rose! No debating!'
    },
    {
        "name":"Raymond", 
        "namecolor": "lightblue", 
        "nameisdark": true,
        "content": "Guten Tag! That's french for Good Tag!"
    },
    {
        "name":"Marshal", 
        "namecolor": "white", 
        "nameisdark": true,
        "content": "Ahem... I'm a boy..."
    },
    {
        "name":"Marina", 
        "namecolor": "hotpink", 
        "nameisdark": false,
        "content": "Blurp, I'm the only <div class='pink'>pink</div> octopus, but there's only three of us so it makes sense..."
    },
    {
        "name":"Zucker", 
        "namecolor": "burlywood", 
        "nameisdark": false,
        "content": "I just realized... I'm a <div class='shout'>SNACK!</div> Should I eat myself?"
    },
    {
        "name":"Barold", 
        "namecolor": "grey", 
        "nameisdark": false,
        "content": "Oh, you're the resident representative? I moved to here from <div class='pink'>aple</div>!"
    },
    {
        "name":"Sherb", 
        "namecolor": "cyan", 
        "nameisdark": true,
        "content": "I'm hungry... I need <div class='shout'>SALT!</div>"
    },
]

function setDialog(jsontable) {
    document.querySelector(".name").innerHTML = jsontable.name
    document.documentElement.style.setProperty("--dialog-name",jsontable.namecolor)
    if (jsontable.nameisdark) {
        document.documentElement.style.setProperty("--dialog-name-inside","rgb(112, 94, 43)")
    } else {
        document.documentElement.style.setProperty("--dialog-name-inside","rgb(255, 255, 255)")
    }
    document.querySelector(".content").innerHTML = jsontable.content
}

setDialog(messages[messages.length - 1])

document.getElementById("next-button").addEventListener("mousedown", function() {
    let randomMessageId = Math.floor(Math.random() * messages.length)
    setDialog(messages[randomMessageId])
})
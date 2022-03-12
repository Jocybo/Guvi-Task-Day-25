const dog = document.getElementById('dog');
const fox = document.getElementById('fox');

dog.addEventListener('clcik', getRandomdog())
fox.addEventListener('clcik', getRandomfox())

function getRandomdog() {
    fetch('https://random.dog/woof.json')
        .then((data) => data.json())
        .then((result) => {
            if (result.url.Gif) {
                getRandomdog()
            } else {
                dog.innerHTML = `<img src="${result.url}">`
            }
        })
}

function getRandomfox() {
    fetch('https://randomfox.ca/floof/')
        .then((data) => data.json())
        .then((result) => {
            fox.innerHTML = `<img src="${result.image}">`
        })
}
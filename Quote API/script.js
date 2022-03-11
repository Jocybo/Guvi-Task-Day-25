// SINGLE QUOTE

function output() {
    let value = document.getElementById('num').value;
    fetch(`https://the-dune-api.herokuapp.com/quotes/id/${value}`)
        .then((data) => data.json())
        .then((res) => {
            console.log(res);
            console.log(res.quote);
            document.getElementById('append').innerHTML = `<p id="t-color"class="text-center fs-3">${res.quote}</p>`;
        })
}
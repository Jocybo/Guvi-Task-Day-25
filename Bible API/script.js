/*==================== FUNCTION FOR ONCLICK EVENT ========= */

function getValue() {

    /*========== GET USER INPUTS AND STORED TO VARIABLE ============== */

    let name = document.getElementById('name').value;
    let chapter = document.getElementById('chapter').value;
    let verse = document.getElementById('verse').value;

    /*========= USING FETCH FOR SEARCH VALUES ============ */

    fetch(`https://bible-api.com/${name}${chapter}:${verse}`)
        .then((data) => data.json())
        .then((res) => {
            console.log(res);
            console.log(res.reference);
            console.log(res.verses[0].text);

            /*================== APPEND THE RESULT TO HTML =================== */

            document.getElementById('bookname').innerHTML = `Book Name <br><span id="o-color" class="fs-1 text-capitalize">${res.verses[0].book_name}<span>`;
            document.getElementById('bookofchapter').innerHTML = `Chapter <br><span id="o-color" class="fs-1 text-capitalize"> ${res.verses[0].chapter}<span>`;
            document.getElementById('numofverse').innerHTML = `Verse <br><span id="o-color" class="fs-1 text-capitalize">${res.verses[0].verse}<span>`;
            document.getElementById('text').innerHTML = `Content <br><span id="o-color" class="fs-3 text-capitalize">${res.verses[0].text}<span>`;
            document.getElementById('reference').innerHTML = `Reference<br><span id="o-color" class="fs-1 text-capitalize">${res.reference}<span>`;
            document.getElementById('translationname').innerHTML = `Translation Name<br><span id="o-color" class="fs-3 text-capitalize">${res.translation_name}<span>`;

        })
};
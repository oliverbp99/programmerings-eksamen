const kandidatDFDiv = document.getElementById("kandidatDF-div")
const kandidatSFDiv = document.getElementById("kandidatSF-div")

/*function showKandidatForm() {
    kandidatFormExpandButton.style.display = "none";
    kandidatFormDiv.innerHTML = createKandidatForm;
}

function removeKandidatForm() {
    kandidatFormExpandButton.style.display = "block";
    kandidatFormDiv.innerHTML = "";
}

const sortKandidatForm = `

`;*/
function sortBySF(){
    kandidatDFDiv.style.display = "none"
    kandidatSFDiv.style.display = "block"

    fetch(baseURL + "/kandidater")
        .then(response => response.json())
        .then(result => {
            const kandidaterDF = result.filter(kandidater => kandidater.parti && kandidater.parti.name === 'SF');
            kandidaterDF.map(createKandidatCardSF);
        })
}

function sortByDF(){
    kandidatSFDiv.style.display = "none"
    kandidatDFDiv.style.display = "block"


    fetch(baseURL + "/kandidater")
        .then(response => response.json())
        .then(result => {
            const kandidaterDF = result.filter(kandidater => kandidater.parti && kandidater.parti.name === 'DF');
            kandidaterDF.map(createKandidatCardDF);
        })
}


function createKandidatCardDF(kandidat) {
    console.log(kandidat)
    const cardElement = document.createElement("div")

    cardElement.innerHTML = `
        <span>${kandidat.name}</span>
        <span>${kandidat.age}</span>
        <span>${kandidat.email}</span>
        <span>${kandidat.parti.name}</span>
    `;
    kandidatDFDiv.appendChild(cardElement);
}
function createKandidatCardSF(kandidat) {
    console.log(kandidat)
    const cardElement = document.createElement("div")

    cardElement.innerHTML = `
        <span>${kandidat.name}</span>
        <span>${kandidat.age}</span>
        <span>${kandidat.email}</span>
        <span>${kandidat.parti.name}</span>
    `;
    kandidatSFDiv.appendChild(cardElement);
}

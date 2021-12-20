const kandidatFormDiv = document.getElementById("create-kandidat-form");
const kandidatFormExpandButton = document.getElementById("expand-kandidat-form");


const createKandidatForm = `
    <div>
        <label>Navn</label>
        <input id="create-kandidat-name" placeholder="Kandidat navn">
    </div>
    <div>
        <label>Alder</label>
        <input id="create-kandidat-age" placeholder="Alder"> 
    </div>
    <div>
        <label>Email</label>
        <input id="create-kandidat-email" placeholder="Email">    
    </div>
    <div>
        <label>Parti</label>
        <input id="create-kandidat-parti" placeholder="Parti">    
    </div>
    <div>
        <button onclick="createKandidat()">Opret ny Kandidat</button>
        <button onclick="removeKandidatForm()">Annuler</button>
        <button onclick="sortByDF()">Sorter efter medlemmer af DF</button>
        <button onclick="sortBySF()">Sorter efter medlemmer af SF</button>
    </div>`;




function showKandidatForm() {
    kandidatFormExpandButton.style.display = "none";
    kandidatFormDiv.innerHTML = createKandidatForm;
}

function removeKandidatForm() {
    kandidatFormExpandButton.style.display = "block";
    kandidatFormDiv.innerHTML = "";
}

function createKandidat() {
    const name = document.getElementById("create-kandidat-name").value;
    const age = document.getElementById("create-kandidat-age").value;
    const email = document.getElementById("create-kandidat-email").value;
    const parti = document.getElementById("create-kandidat-parti").value;

    const newParti = {
        name: parti
    };

    const newKandidat = {
        name: name,
        age: age,
        email: email,
        parti: newParti

    };

    console.log(newKandidat)

    fetch(baseURL + "/kandidater/" + parti, {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newKandidat)
    }).then(response => {
        if (response.status === 200) {
            location.reload();
            return false;
            removeKandidatForm();
            console.log(response)
        } else {
            console.log("Kandidat ikke oprettet.", response.status);
        }
    });
}

document.getElementById("expand-kandidat-form")
    .addEventListener("click", showKandidatForm);
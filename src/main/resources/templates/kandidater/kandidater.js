const kandidatTableBody = document.getElementById("kandidater-tbody");

fetch(baseURL + "/kandidater")
    .then(response => response.json())
    .then(kandidater => {
        kandidater.map(createKandidatTable);
    });

function createKandidatTable(kandidat){
    const kandidatTableRow = document.createElement("tr");
    kandidatTableRow.id = kandidat.id

    kandidatTableBody.append(kandidatTableRow);
    constructKandidatTableRow(kandidatTableRow, kandidat);

}

function constructKandidatTableRow(kandidatTableRow, kandidat){
    kandidatTableRow.innerHTML = `
           
            <td>
                <p class="row-kandidat-name">${(kandidat.name)}</p>
            </td>
            <td>
                <p class="row-kandidat-age">${(kandidat.age)}</p>
            </td>
           <td>
                <p class="row-kandidat-email">${(kandidat.email)}</p>
            </td>
            <td>
                <p class="row-kandidat-parti">${(kandidat.parti.name)}</p>
            </td>
            <td>
                <button id="update-button-${kandidat.id}">📝</button>                       
                <button onclick="deleteKandidat(${kandidat.id})">❌</button>            
            </td>    
        `;
    document.getElementById(`update-button-${kandidat.id}`)
        .addEventListener("click", () => updateKandidat(kandidat));
}
function deleteKandidat(kandidatId) {
    fetch(baseURL + "/kandidater/" + kandidatId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(kandidatId).remove();
        } else {
            console.log(response.status);
        }
    });
}




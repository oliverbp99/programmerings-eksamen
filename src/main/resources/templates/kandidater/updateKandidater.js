function updateKandidat(kandidat){
    const tableRowToUpdate = document.getElementById(kandidat.id)
    tableRowToUpdate.innerHTML = `
      

        <td>
            <input id="update-kandidat-name-${kandidat.id}" value="${(kandidat.name)}">
        </td>
        <td>
            <input id="update-kandidat-age-${kandidat.id}" value="${(kandidat.age)}">
        </td>
        <td>
            <input id="update-kandidat-email-${kandidat.id}" value="${(kandidat.email)}">
        </td>
        <td>
            <input id="update-kandidat-parti-${kandidat.id}" value="${(kandidat.parti.name)}">
        </td>
        <td>
            <button onclick="updateKandidatBackEnd(${kandidat.id})">✅</button>
            <button id="cancel-update-${kandidat.id}">❌</button>
        </td>
      
       `;
    document.getElementById(`cancel-update-${kandidat.id}`)
        .addEventListener("click", () => undoUpdateTableRow(kandidat));
}
function undoUpdateTableRow(kandidat) {
    const kandidatTableRow = document.getElementById(kandidat.id);

    constructKandidatTableRow(kandidatTableRow, kandidat);
}

function updateKandidatBackEnd(kandidatId){
    const tableRowToUpdate = document.getElementById(kandidatId);

    const kandidatToUpdate = {
        id: kandidatId,
        name: document.getElementById(`update-kandidat-name-${kandidatId}`).value,
        age: document.getElementById(`update-kandidat-age-${kandidatId}`).value,
        email: document.getElementById(`update-kandidat-email-${kandidatId}`).value,
        parti: { name: document.getElementById(`update-kandidat-parti-${kandidatId}`).value}
    };

    fetch(baseURL + "/kandidater/" + kandidatId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(kandidatToUpdate)
    }).then(response => {
        console.log(kandidatToUpdate)
        if(response.status === 200){
            constructKandidatTableRow(tableRowToUpdate, kandidatToUpdate);
        }
    });
}

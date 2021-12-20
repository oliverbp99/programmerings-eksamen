const partierTableBody = document.getElementById("partier-tbody");

fetch(baseURL + "/partier")
    .then(response => response.json())
    .then(partier => {
        partier.map(createPartierTable);
    });

function createPartierTable(partier){
    const partierTableRow = document.createElement("tr");
    partierTableRow.id = partier.id

    partierTableBody.append(partierTableRow);
    constructpartierTableRow(partierTableRow, partier);

}

function constructpartierTableRow(partierTableRow, partier){
    partierTableRow.innerHTML = `
           
            <td>
                <p class="row-parti-name">${(partier.name)}</p>
            </td>
            <td>
                <p class="row-parti-description">${(partier.description)}</p>
            </td>
           <td>
                <p class="row-parti-votes">${(partier.votes)}</p>
            </td>
        `;
}





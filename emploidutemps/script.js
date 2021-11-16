const heure = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

//document.getElementById("table_body").onload = function() {loadTableEmploi()};
loadTableEmploi();

function createRow(value, index, array) {
    const tr1 = document.createElement("tr");
    const tr2 = document.createElement("tr");

    const tdnode0 = document.createElement("td");
    const textnode0 = document.createTextNode(value + "h30");
    tdnode0.setAttribute("class", "text-center");
    tdnode0.setAttribute("rowspan", "2");
    tdnode0.appendChild(textnode0);
    tr1.appendChild(tdnode0);

    for (let i = 0; i < 7; i++) {
        j = i + 1;
        const tdnode1 = document.createElement("td");
        const tdnode2 = document.createElement("td");
        const textnode1 = document.createTextNode("");
        const textnode2 = document.createTextNode("");
        tdnode1.setAttribute("id", value + "0" + j);
        tdnode2.setAttribute("id", value + "3" + j);
        tdnode1.appendChild(textnode1);
        tdnode2.appendChild(textnode2);
        tr1.appendChild(tdnode1);
        tr2.appendChild(tdnode2);
    }

    const tbody_element = document.getElementById("table_body");
    tbody_element.appendChild(tr1);
    tbody_element.appendChild(tr2);
}

function loadTableEmploi() {
    heure.forEach(createRow);
}
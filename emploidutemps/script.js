const heure = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
var jours = {"Lundi": 1, "Mardi": 2, "Mercredi": 3, "Jeudi": 4, "Vendredi": 5, "Samedi": 6, "Dimanche": 7};

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
        tdnode2.setAttribute("id", value + "5" + j);
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

function ajouterTache() {
    let jour = document.getElementById("jours").value;
    let temps = document.getElementById("temps").value;
    let tache = document.getElementById("tache").value;
    let tacheLength = tache.length;
    let duree = document.getElementById("duree").value;
    let couleur = document.getElementById("tacheCouleur").value;

    if (tacheLength == 0) {
        document.getElementById("error_info").innerHTML = "Le champ Tache est obligatoire.";
        document.getElementById("error_info").style.color = "red";
        document.getElementById("tache").style.borderColor = "red";
    } else {
        document.getElementById("error_info").innerHTML = "Une tâche a été ajoutée.";
        document.getElementById("error_info").style.color = "blue";
        document.getElementById("tache").style.borderColor = null;
        let jour_id = jours[jour];
        let min = temps.slice(temps.length - 2);
        let heure = temps.slice(0, temps.length - 3);
        if (min == "30"){
            cell_id = heure + "5" + jour_id;
        } else {
            cell_id = heure + "0" + jour_id;
        }
        document.getElementById(cell_id).innerHTML = tache;
        document.getElementById(cell_id).style.color = "white";
        document.getElementById(cell_id).style.verticalAlign = "middle";

        let cell_id_num = Number(cell_id);
        let i = Number(duree) / 30;
        document.getElementById(cell_id).setAttribute("rowspan", String(i));
        document.getElementById(cell_id).style.backgroundColor = couleur;
        for (let j = 1; j < i; j++) {
            k = 50*j;
            cell_id_num_new = cell_id_num + k;
            if (cell_id_num_new < 2300) {
                cell_id = String(cell_id_num_new);
                const elmnt = document.getElementById(cell_id);
                elmnt.remove();
            }
        }
    }
}
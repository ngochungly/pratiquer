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

function ajouterTache() {
    let tache = document.getElementById("tache").value;
    let tacheLength = tache.length;
    let jour = document.getElementById("jours").value;
    let temps = document.getElementById("temps").value;

    if (tacheLength == 0) {
        document.getElementById("error").innerHTML = "Le champ Tache est obligatoire.";
        document.getElementById("error").style.color = "red";
        document.getElementById("tache").style.borderColor = "red";
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("tache").style.borderColor = null;
        let jid = jours[jour];
        let m = temps.slice(temps.length - 2);
        let h = temps.slice(0, temps.length - 3);
        if (m == "30"){
            console.log(m);
            tid = h + "3" + jid;
        } else {
            console.log(m);
            tid = h + "0" + jid;
        }
        document.getElementById(tid).innerHTML = tache;
    }
}
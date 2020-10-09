const pages = [
    { page: document.getElementById("accueil"),
     button: document.getElementById("btnAccueil") },
     { page: document.getElementById("contact"),
     button: document.getElementById("btnContact") },
     { page: document.getElementById("messes"),
     button: document.getElementById("btnMesses") }
    ];

const selectAccueil = () => selectPage(0);
const selectContact = () => selectPage(1);
const selectMesses  = () => selectPage(2);

function selectPage(index) {
    for (let i = 0; i < pages.length; i++) {
        if (i === index) {
            pages[i].page.style.display = "";
            pages[i].button.className = "selected";
        } else {
            pages[i].page.style.display = "none";
            pages[i].button.className = "menuItem";
        }
    }
}